"use client";
import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import styles from "./page.module.css";
import { getJudgeFromDb, updateJudgingStatus } from "../services/judgingServices";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function JudgePortal() {
    const [judgingStates, setJudgingStates] = useState([]);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [judgeEmail, setJudgeEmail] = useState("");
    const [judgePassword, setJudgePassword] = useState("");

    const toastProps = (success) => ({
        hideProgressBar: true,
        closeButton: true,
        className: success ? styles.toastSuccess : styles.toastError,
        closeButton: () => <span>[x]</span>
    });

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                judgeEmail,
                judgePassword
            );

            if (userCredential.user) {
                setIsAuthorized(true);
                toast("You have been signed in.", toastProps(true));
                await loadJudgingStates();
            }
        } catch (err) {
            console.error("Error signing in:", err);
            toast("Unauthorized access. Invalid email or password.", toastProps(false));
        }
    };

    async function loadJudgingStates() {
        const res = (await getJudgeFromDb(auth.currentUser.uid)).data();
        setJudgingStates(res.judging);
    }

    function shouldIBeEditable(team, index) {
        if (team.status == "completed") {
            return false;
        }

        if (team.status == "progressing") {
            return true;
        }

        let firstPending = -1;
        for (let i = 0; i < judgingStates.length; i++) {
            if ((judgingStates[i].status == "pending" || judgingStates[i].status == "progressing") && firstPending == -1) {
                firstPending = i;
                break;
            }
        }

        if (firstPending == index) {
            return true;
        }

        return false;
    }

    async function handleChange(e, team, index) {
        const newJudgingStates = [...judgingStates];
        newJudgingStates[index].status = e.target.value;
        setJudgingStates(newJudgingStates);

        await updateJudgingStatus(auth.currentUser.uid, team.uid, e.target.value);
    }

    if (isAuthorized != true) {
        return (
            <div className={styles.page}>
                <ToastContainer />
                <form
                    className={styles.formContainer}
                    onSubmit={handlePasswordSubmit}
                >
                    <h1>Judge Dashboard</h1>
                    <p>Please login to gain access to this page.</p>
                    <div className={styles.judgeLogin_inputGroup}>
                        <input
                            type="text"
                            value={judgeEmail}
                            onChange={(e) => setJudgeEmail(e.target.value)}
                            placeholder="Enter email"
                            disabled={isAuthorized === "loading" ? true : false}
                            autoFocus={true}
                            required
                        />
                        <input
                            type="password"
                            value={judgePassword}
                            onChange={(e) => setJudgePassword(e.target.value)}
                            placeholder="Enter password"
                            disabled={isAuthorized === "loading" ? true : false}
                            required
                        />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <ToastContainer />
            <div className={styles.formContainer}>
                <h1>Judge Dashboard</h1>
                <div className={styles.signoutDiv}>
                    <p>{auth.currentUser.email}</p>
                    <button
                        id={styles.signoutBtn}
                        onClick={async () => {
                            await signOut(auth);
                            toast("You have been signed out.", toastProps(true));
                            setIsAuthorized(false);
                        }}
                    >
                        Sign out
                    </button>
                </div>
                <form>
                    {judgingStates &&
                        judgingStates.map((team, index) => {
                            return (
                                <div key={team.uid} className={styles.teamCard}>
                                    <h2>Team: {team.name} ({team.uid})</h2>
                                    {!shouldIBeEditable(team, index) ?
                                        (<p>Status: <b>{team.status.charAt(0).toUpperCase() + team.status.substring(1)}</b></p>) :
                                        (<>
                                            <p>Status:</p>
                                            <select defaultValue={team.status} onChange={(e) => handleChange(e, team, index)}>
                                                <option value="pending">Pending</option>
                                                <option value="progressing">In Progress</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                        </>)
                                    }
                                </div>
                            );
                        })
                    }
                </form>
            </div>
        </div>
    );
}
