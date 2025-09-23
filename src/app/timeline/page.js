import styles from "./page.module.css"

export default function Timeline() {
    return (
        <div className={styles.content}>
            <div className={styles.headContainer}>
                <div className={styles.head}>
                    <div className={styles.headtext}>
                        <h1>Timeline</h1>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.timeline}>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                            <img src="timeline/pic-2024.png" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2024</header>
                            <div className={styles.textContainer}>
                                Held at the Johns Hopkins University Applied Physics Laboratory on December 16th, 2023. Our biggest event yet!
                                Over 150 attendees submitted amazing projects to compete for prizes within AI, math, game dev, beginner, and advanced tracks! During the event, we held workshops teaching Python, web development, and cryptography, and ended with a Monkeytype competition as per tradition.
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <img src="timeline/pic-2023.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2023</header>
                            <div className={styles.textContainer}>
                                Held at Howard Community College on January 14th, 2023. There were 100+ registrants who submitted some great projects! During the event, workshops on programming fundamentals, AI, and web desmosevelopment were held. And just like last year's event (2021), there was a TypeRacer competition.<br /><br />
                                <em>*There wasn't a QuHacks 2022 due to a postponement which shifted the event from December 2022 to January 2023. QuHacks 2022 was renamed to QuHacks 2023 to avoid confusion.</em>
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <img src="timeline/pic-2021.png" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2021</header>
                            <div className={styles.textContainer}>
                            Held virtually on December 18th, 2021. There were close to 70 participants and 20 project submissions! Workshops on Java, Python, Cybersecurity, and Web Development were held, with a TypeRacer competition to conclude <i>(which Aryan won all seven rounds of)</i>.
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <img src="timeline/pic-2020.png" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2020</header>
                            <div className={styles.textContainer}>
                                Held virtually on December 18th, 2020. We offered a computer science college panel, special guest speakers, and interesting prompts for both the novice and advanced divisions! 
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <img src="timeline/pic-2019.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2019</header>
                            <div className={styles.textContainer}>
                            Held at Towson University on December 14th, 2019. We had more than 50 participants and offered exciting crash courses on Java, Python, and Web Development! We also had some pretty cool sponsors, including Wolfram, repl.it, and Balsamiq!
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                        <   img src="timeline/pic-2018.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2018</header>
                            <div className={styles.textContainer}>
                                Held at Towson University on December 8th, 2018. Unfortunately, the website for QuHacks 2018 wasn't fully archived so the current team couldn't find any more info to put here :( . Instead, enjoy the picture of stickers!
                            </div>
                        </div>
                    </div>
                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                            <img src="timeline/pic-2017.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2017</header>
                            <div className={styles.textContainer}>
                                The second QuHacks event! Held at UMBC on December 9th, 2017. Not much info could be found out about this event at the time of building our timeline -- sorry about that :(
                            </div>
                        </div>
                    </div>

                    <div className={styles.timelineCard}>
                        <div className={styles.imgContainer}>
                            <img src="timeline/pic-2016.jpg" />
                        </div>
                        <div className={styles.leftContainer}>
                            <header className={styles.cardHeader}>QuHacks 2016</header>
                            <div className={styles.textContainer}>
                                The first ever QuHacks, held at the Johns Hopkins University Applied Physics Laboratory on October 30, 2016!
                                There were nearly 35 attendees, a crash course in Java, and novice/advanced problemsets for everyone to have a great time.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
