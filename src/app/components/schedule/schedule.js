import styles from "./component.module.css"
import Link from "next/link"


export default function ScheduleSection() {
    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>Schedule</h1>
            <br />
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Time</th>
                        <th className={styles.th}>DH 100</th>
                        <th className={styles.th}>DH 108</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.td}>9:00 AM - 10:00 AM</td>
                        <td className={styles.td}>Check-In</td>
                        <td className={styles.td}></td>
                    </tr>
                    <tr>
                        <td className={styles.td}>10:00 AM - 10:15 AM</td>
                        <td className={styles.td}>Opening Ceremony</td>
                        <td className={styles.td}></td>
                    </tr>
                    <tr>
                        <td className={styles.td}>10:15 AM</td>
                        <td className={styles.td}>Hacking Begins!</td>
                        <td className={styles.td}>Hacking Begins!</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>10:15 AM</td>
                        <td className={styles.td}>Team Formation</td>
                        <td className={styles.td}>Team Formation</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>10:30 AM - 11:30 AM</td>
                        <td className={styles.td}></td>
                        <td className={styles.td}>Intro to Python</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>11:45 AM - 12:30 PM</td>
                        <td className={styles.td}></td>
                        <td className={styles.td}>Solona Workshop</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>1:00 PM - 2:00 PM</td>
                        <td className={styles.td}>Lunch</td>
                        <td className={styles.td}></td>
                    </tr>
                    <tr>
                        <td className={styles.td}>2:00 PM - 3:00 PM</td>
                        <td className={styles.td}></td>
                        <td className={styles.td}>Getting Started with Web Dev</td>
                    </tr>
                    <tr>
                    <td className={styles.td}>3:15 PM - 3:45 PM</td>
                        <td className={styles.td}></td>
                        <td className={styles.td}>Intro to AI</td>
                    </tr>
                    <tr>
                    <td className={styles.td}>4:00 PM - 4:30 PM</td>
                        <td className={styles.td}></td>
                        <td className={styles.td}>Monkey Type Competition</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>4:45 PM</td>
                        <td className={styles.td}>Hacking Ends!</td>
                        <td className={styles.td}>Hacking Ends!</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>4:45 PM - 5:45 PM</td>
                        <td className={styles.td}>Judging</td>
                        <td className={styles.td}>Judging</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>5:45 PM - 6:00 PM</td>
                        <td className={styles.td}>Closing Ceremony</td>
                        <td className={styles.td}></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
