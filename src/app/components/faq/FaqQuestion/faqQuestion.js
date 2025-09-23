"use client"
import { useState } from 'react'
import styles from './component.module.css'

export default function FaqQuestion(props) {
    let [expanded, setExpanded] = useState(false)

    function toggle() {
        setExpanded(!expanded);
    }

    return (
        <div className={styles.card}>
            <button className={styles.btn} onClick={toggle}>{props.question}</button>
            
            <div className={`${styles.textBase} ${expanded ? styles.text : styles.textHidden}`}>
                <p>{props.answer}</p>
            </div>
        </div>
    )
}