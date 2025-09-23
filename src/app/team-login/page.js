'use client';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
import styles from '../team-registration/page.module.css';
import { getTeamFromDb } from '../services/judgingServices';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function TeamLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const googleProvider = new GoogleAuthProvider();

    const toastProps = (success) => ({
        hideProgressBar: true,
        closeButton: true,
        className: success ? styles.toastSuccess : styles.toastError,
        closeButton: () => <span>[x]</span>
    })

    async function handleLogin(e) {
        e.preventDefault();
        
        document.getElementById('form').reportValidity();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/team-dashboard');
        } catch (error) {
            console.error("Error registering: ", error.message);
            toast("Login failed. Please try again or contact an organizer.", {...toastProps(false)});
        }
    };

    async function handleOAuthSignIn(provider) {
        try {
            const res = await signInWithPopup(auth, provider);
            const user = res.user;

            let userDb = await getTeamFromDb(user.uid);
            if (!userDb.exists()) {
                await user.delete();
                toast("Team not found. Please register first.", {...toastProps(false)});
                return;
            }

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
                <h1>Team Login</h1>
                <p className={styles.loginLink}>Meant to sign up? <a href="/team-registration">Sign up instead</a></p>
                <form onSubmit={handleLogin} className={styles.form} id="form">
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
                    <button className={styles.btnPrimary} type="submit">Login</button>
                    <hr className={styles.hr} />
                    <div>
                        <p>Alternatively, sign in with...</p>
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