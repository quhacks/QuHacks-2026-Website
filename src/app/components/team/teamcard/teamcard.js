import styles from './component.module.css'

export default function TeamCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={props.image} alt={props.name} />
            </div>
            <div className={styles.text}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.position}>{props.position}</p>
            </div>
        </div>
    )
}