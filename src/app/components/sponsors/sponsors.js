import styles from "./component.module.css"

export default function Sponsors() {
    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>2026 Sponsors</h1>
            <div className={styles.sponsorCall}>
                <p>Interested in sponsoring QuHacks this year? <a href="mailto:info@quhacks.tech">Contact us!</a></p>
            </div>

            <div className={`${styles.tier} ${styles.platinum}`}>
                <h1 className={styles.tiername}>Platinum</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://solana.org/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/solana_foundation.png" />
                    </a>
                </div>
            </div>

            {/* <div className={`${styles.tier} ${styles.gold}`}>
                <h1 className={styles.tiername}>Gold</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.issi-software.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/issi.png" />
                    </a>
                </div>
            </div> */}

            <div className={`${styles.tier} ${styles.silver}`}>
                <h1 className={styles.tiername}>Silver</h1>
                <div className={styles.row}>
                    {/* <a rel="noreferrer noopener" target='_blank' href="https://www.wolfram.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px", maxHeight: "7.7rem"}} src="sponsors/wolfram.png" />
                    </a> */}
                    <a rel="noreferrer noopener" target='_blank' href="https://www.wegmans.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/wegmans.png" />
                    </a>
                </div>
            </div>

            <div className={`${styles.tier} ${styles.bronze}`}>
                <h1 className={styles.tiername}>Bronze</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://1password.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/1password.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://artofproblemsolving.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/aops.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.jumbojumbocafe.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/jumbo_jumbo.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://codehs.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/codehs.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.interviewcake.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/interview_cake.png" />
                    </a>
                    <a rel="noreferrer noopener" target='_blank' href="https://www.coca-cola.com/us/en">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/coca_cola.png" />
                    </a>
                    {/* <a rel="noreferrer noopener" target='_blank' href="http://chipotle.com">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/chipotle.png" />
                    </a> */}
                </div>
            </div>

            {/* <div className={`${styles.tier} ${styles.mediaPartner}`}>
                <h1 className={styles.tiername}>Partner</h1>
                <div className={styles.row}>
                    <a rel="noreferrer noopener" target='_blank' href="https://chspyoneers.com/">
                        <img style={{backgroundColor: "white", border: "10px solid white", borderRadius: "8px"}} src="sponsors/pyoneers.png" />
                    </a>
                </div>
            </div> */}
        </div>
    )
}
