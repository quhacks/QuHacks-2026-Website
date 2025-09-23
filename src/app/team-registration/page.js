'use client';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { addTeamToDb } from '../services/judgingServices';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { areSubmissionsOpen } from '../services/projectService';

export default function TeamRegistrationPage() {
    const [teamName, setTeamName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const [submissionsOpen, setSubmissionsOpen] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    
    const toastProps = (success) => ({
        hideProgressBar: true,
        closeButton: true,
        className: success ? styles.toastSuccess : styles.toastError,
        closeButton: () => <span>[x]</span>
    })

    useEffect(() => {
        async function getSubmissionsOpen() {
            const openD = await areSubmissionsOpen();
            setSubmissionsOpen(openD.open);
        }

        getSubmissionsOpen();
    });

    async function handleRegister(e) {
        e.preventDefault();

        if (!submissionsOpen) {
            toast("You may not register now as submissions are closed.", {...toastProps(false)});
            return;
        }

        document.getElementById('form').reportValidity();

        if (password.length < 6) {
            toast("Password must be at least 6 characters long.", {...toastProps(false)});
            return;
        }

        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password);
            await addTeamToDb(email, teamName, credential);
            router.push('/team-dashboard');
        } catch (error) {
            console.error("Error registering: ", error.message);
            toast("Registration failed. Please try again or contact an organizer.", {...toastProps(false)});
        }
    };

    async function handleOAuthSignIn(provider) {
        if (!submissionsOpen) {
            toast("You may not register now as submissions are closed.", {...toastProps(false)});
            return;
        }
        
        if (!teamName) {
            document.getElementById('form').reportValidity();
            return;
        }

        try {
            const credential = await signInWithPopup(auth, provider);
            const user = credential.user;
            await addTeamToDb(user.email, teamName, credential);
            router.push('/team-dashboard');
        } catch (error) {
            console.error("OAuth sign-in failed: ", error.message);
            toast("Sign-in failed. Please try again or contact an organizer.", {...toastProps(false)});
        }
    };

    return (
        <div className={styles.page}>
            <ToastContainer/>
            <div className={styles.formContainer}>
                <h1>Team Registration</h1>
                <p className={styles.loginLink}>Meant to login? <a href="/team-login">Log in instead</a></p>
                <form onSubmit={handleRegister} className={styles.form} id="form">
                    <div>
                        <label>Team Name*</label>
                        <input 
                            type="teamName" 
                            value={teamName} 
                            onChange={(e) => setTeamName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type="password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button className={styles.btnPrimary} type="submit">Register</button>
                    <p className={styles.formAsterisk}>*Required for both email + password sign up and Google sign up</p>
                    <hr className={styles.hr} />
                    <div>
                        <p>Alternatively, sign up with...</p>
                        <button className={styles.btnProvider} type='button' onClick={() => handleOAuthSignIn(googleProvider)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                            </svg>
                            Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
