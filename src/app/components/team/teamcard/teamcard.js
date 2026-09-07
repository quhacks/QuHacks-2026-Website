import styles from './component.module.css'
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'

const teamNameFont = Space_Grotesk({
    subsets: ['latin'],
    weight: ['600', '700'],
    variable: '--font-team-name',
})

const teamPositionFont = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-team-position',
})

export default function TeamCard(props) {
    return (
        <div className={`${styles.card} ${teamNameFont.variable} ${teamPositionFont.variable}`}>
            <div className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={props.image}
                    alt={props.name}
                    style={{ objectPosition: props.objectPosition || 'center' }}
                />
            </div>
            <div className={styles.text}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.position}>{props.position}</p>
            </div>
        </div>
    )
}
