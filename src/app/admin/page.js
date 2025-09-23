"use client";
import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import styles from "./page.module.css";
import {
    addJudgeToDb,
    getAllJudges,
    getAllTeams,
    addTeamToJudge,
} from "../services/judgingServices";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function AdminPortal() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState("loading");
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");

    const toastProps = (success) => ({
        hideProgressBar: true,
        closeButton: true,
        className: success ? styles.toastSuccess : styles.toastError,
        closeButton: () => <span>[x]</span>
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.email === process.env.NEXT_PUBLIC_FIREBASE_ADMIN_EMAIL) {
                    setIsAuthorized(true);
                    toast("Admin-enabled account detected: Log in successful", toastProps(true));
                } else {
                    setIsAuthorized(false);
                }
            } else {
                setIsAuthorized(false);
            }
        });
    }, []);

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                adminEmail,
                adminPassword
            );

            if (userCredential.user) {
                setIsAuthorized(true);
                toast("Log in successful", toastProps(true));
            }
        } catch (err) {
            console.error("Error signing in:", err);
            toast("Unauthorized access. Invalid email or password.", toastProps(false));
        }
    };

    const handleRegisterJudge = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await addJudgeToDb(email, name, userCredential);
            toast("Judge Registered", toastProps(true));
        } catch (error) {
            console.error("Error registering judge: ", error.message);
            toast("Error registering judge", toastProps(false));
        }
    };

    const handleAutoAssign = async () => {
        try {
            const fetchedTeams = await getAllTeams();
            const fetchedJudges = await getAllJudges();
    
            const teams = fetchedTeams.docs.map((doc) => ({ ...doc.data(), uid: doc.id }));
            const judges = fetchedJudges.docs.map((doc) => ({ ...doc.data(), uid: doc.id }));
    
            const schedule = [];
            const visits = {};

            teams.forEach(team => {
                visits[team.uid] = new Set();
            });

            const numJudges = judges.length;
            const numTeams = teams.length;

            let round = 1;

            for (let judgeIndex = 0; judgeIndex < numJudges; judgeIndex++) {
                const judge = judges[judgeIndex];
                const roundAssignments = [];

                for (let i = judgeIndex; i < numTeams * 2; i += numJudges) {
                    const team = teams[i % numTeams];
                    if (!visits[team.uid].has(judge.uid)) {
                        roundAssignments.push({ judge: judge.uid, team: team.uid });
                        visits[team.uid].add(judge.uid);

                        try {
                            await addTeamToJudge(judge.uid, team.uid);
                        } catch (error) {
                            console.error(`Failed to assign Judge ${judge.name} to Team ${team.name}:`, error);
                        }
                    }
                }

                schedule.push({ round, assignments: roundAssignments });
                round++;
            }

            console.log("Final Schedule:", schedule);
    
        } catch (error) {
            console.error("Error auto-assigning judges: ", error.message);
        }
    };     

    if (isAuthorized != true) {
        return (
            <div className={styles.page}>
                <ToastContainer />
                <form
                    className={styles.formContainer}
                    onSubmit={handlePasswordSubmit}
                >
                    <h1>Admin Portal</h1>
                    <p>Please enter the admin password to access this page.</p>
                    <div className={styles.adminLogin_inputGroup}>
                        <input
                            type="text"
                            value={adminEmail}
                            onChange={(e) => setAdminEmail(e.target.value)}
                            placeholder="Enter email"
                            disabled={isAuthorized === "loading" ? true : false}
                            required
                        />
                        <input
                            type="password"
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
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
        <>
        <ToastContainer />
        <div className={styles.page}>
            <div className={styles.formContainer}>
                <h1>Admin Portal</h1>
                <form onSubmit={handleRegisterJudge}>
                    <h2>Register a Judge</h2>
                    <div>
                        <label htmlFor="name">Judge Name</label>
                        <input
                            id="name"
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Judge Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Register Judge</button>
                    <hr className={styles.hr} />
                    <h2>Other Administrative Functions</h2>
                    <button
                        className={styles.btnProvider}
                        onClick={handleAutoAssign}
                        type="button"
                    >
                        Auto Assign Judges to Teams
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}
