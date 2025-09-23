"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function AdminPortal() {
    const [names, setNames] = useState("");
    const [numWinners, setNumWinners] = useState(34);
    const [winners, setWinners] = useState([]);

    function runRaffle(e) {
        e.preventDefault();

        let namesL = names.split("\n").map((name) => name.trim()).filter((name) => name !== "");

        const ticketCounts = {};
        namesL.forEach((name) => {
            const lowerName = name.toLowerCase();
            ticketCounts[lowerName] = (ticketCounts[lowerName] || 0) + 1;
        });

        const uniqueNames = Object.keys(ticketCounts);

        if (uniqueNames.length < numWinners) {
            alert("Not enough unique names to select that many winners");
            return;
        }

        const weights = uniqueNames.map((name) => ticketCounts[name]);

        function pickWinner() {
            const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
            const randomNum = Math.random() * totalWeight;

            let cumulativeWeight = 0;
            for (let i = 0; i < uniqueNames.length; i++) {
                cumulativeWeight += weights[i];
                if (randomNum < cumulativeWeight) {
                    return uniqueNames[i];
                }
            }
        }

        const winners = [];
        while (winners.length < numWinners) {
            let winner = pickWinner();
            if (!winners.includes(winner)) {
                winners.push(winner.charAt(0).toUpperCase() + winner.slice(1));
            }
        }

        setWinners(winners);
    }

    return (
        <div className={styles.page}>
            <div className={styles.formContainer}>
                <h1>Select Raffle Winners</h1>
                <form onSubmit={(e) => runRaffle(e)}>
                    <div>
                        <label htmlFor="names">
                            Enter names (line-separated names):
                        </label>
                        <textarea
                            id="names"
                            type="names"
                            rows={10}
                            value={names}
                            onChange={(e) => setNames(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="numWinners">Number of Winners:</label>
                        <input
                            id="numWinners"
                            type="numWinners"
                            value={numWinners}
                            onChange={(e) => setNumWinners(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Run Raffle</button>
                </form>
                <br /><br />
                {winners.length > 0 && (
                    <div>
                        <h2>Winners:</h2>
                        {winners.map((winner) => {
                            return <p>- {winner}</p>;
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
