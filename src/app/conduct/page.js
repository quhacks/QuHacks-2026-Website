"use client"
import styles from "./page.module.css"

export default function ConductPage() {
    return (
        <main>
            <div className={styles.content}>
                <div className={styles.headContainer}>
                    <div className={styles.head}>
                        <div className={styles.headtext}>
                            <h1>QuHacks Code of Conduct</h1>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className={styles.sectionContainer}>
                    <p>QuHacks requires all attendees to be respectful to one another. <br />At our events, all attendees are required to follow certain rules when building projects:</p>
                    <ul>
                        <li>Do not use AI generated code. Open source code is fine, as long as it is publicly available for everyone to access.</li>
                        <li>Your project must be created solely for QuHacks, and you cannot work on something you already started prior to the event.</li>
                        <li>Working on the project (coding, setting up environment, etc) outside of the event timeframe is strictly prohibited.</li>
                        <li>Projects must be appropriate and safe for children to use.</li>
                    </ul>
                    <br />
                    <p>Besides that, we require attendees to abide by certain behavioral rules:</p>
                    <ul>
                        <li>Treat all volunteers with respect</li>
                        <li>Be a good sport, regardless of the outcome</li>
                        <li>Follow the Golden Rule</li>
                    </ul>
                    <br />
                    <p>Remember: hackathons are about learning and having fun!</p>
                </div>
            </div>
        </main>
    )
}