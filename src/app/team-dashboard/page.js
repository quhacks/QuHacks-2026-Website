"use client";
import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styles from "./page.module.css";
import { getAllRelevantJudges, getTeamFromDb } from "../services/judgingServices";
import { useRouter } from "next/navigation";

export default function TeamDashboard() {
    const [judgingStates, setJudgingStates] = useState([]);
    const [team, setTeam] = useState("loading");

    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const teamData = await getTeamFromDb(user.uid);
                setTeam(teamData.data());

                const judges = await getAllRelevantJudges(user.uid);
                setJudgingStates(judges);
            }
        });
    }, []);

    function calculateWaitTime(info) {
        if (info.teamIndices[0] == 0) return 0;

        let indexOfPendingTeam = -1;
        for (let i = 0; i < info.teamIndices[0]; i++) {
            if (info.data.judging[i].status === "pending" || info.data.judging[i].status === "progressing") {
                indexOfPendingTeam = i;
                break;
            }
        }

        return indexOfPendingTeam === -1 ? 0 : (info.teamIndices[0] - indexOfPendingTeam) * 4;
    }

    if (team === "loading") {
        return (
            <div className={styles.page}>
                <div className={styles.formContainer}>
                    <h1>Team Dashboard</h1>
                    <form>
                        <p>Loading...</p>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.formContainer}>
                <h1>Team Dashboard</h1>
                <div className={styles.signoutDiv}>
                    <p>{auth.currentUser.email}</p>
                    <button
                        id={styles.signoutBtn}
                        onClick={async () => { 
                            await signOut(auth);
                            router.push("/team-login"); 
                        }}
                    >
                        Sign out
                    </button>
                </div>
                <div className={styles.signoutDiv}>
                    <p>Submit Your Project: <a href="/submit">Click here!</a></p>
                </div>
                <form>
                    {judgingStates &&
                        judgingStates.slice()
                            .sort((a, b) => calculateWaitTime(a) - calculateWaitTime(b))
                            .map((info) => {
                                const status = info.data.judging[info.teamIndices[0]].status;
                                return (
                                    <div key={info.data.uid} className={styles.teamCard}>
                                        <h2>Judge: {info.data.name}</h2>
                                        <p>Approximate Wait Time: <b>{calculateWaitTime(info)} minutes</b></p>
                                        <h3>Status: {status !== "progressing" ? status.charAt(0).toUpperCase() + status.substring(1) : "In Progress"}</h3>
                                    </div>
                                );
                            })}
                    {judgingStates.length === 0 && (
                        <p>No judges are currently assigned to your team.</p>
                    )}
                </form>
            </div>
        </div>
    );
}