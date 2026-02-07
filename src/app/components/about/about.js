import styles from "./component.module.css"
import Link from "next/link"

export default function AboutSection() {
    return (
        <div className={styles.sectionContainer}>
            <div className={styles.aboutInfoContainer}>
                <h1 className={styles.title}>About Us</h1>

                <p className={styles.text}>QuHacks is a day-long hackathon  <font color="#2866d2">by students, for students.</font> Join us for a day of <font color="#2866d2">creation, innovation, and fun</font> with fellow middle and high schoolers interested in coding. From seasoned coding veterans to first-time programmers,  <font color="#2866d2">all are welcome to join</font>.
                    Discover your ability to create change by developing technology to solve real-world problems, attend workshops, and meet some new friends. <font color="#2866d2">We can't wait to see you there!</font>
                </p>
                <Link className={styles.learnMore} href="/timeline"> Learn more... </Link>
            </div>

            <div className={styles.aboutImg}>
                <img src="about.jpeg"></img>
            </div>
        </div>
    )
}