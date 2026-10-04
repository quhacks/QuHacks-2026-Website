import styles from './component.module.css';
const sponsors = [
  ['Solana Foundation', 'solana_foundation.png', 'https://solana.org/', 'Platinum'],
  ['Wegmans', 'wegmans.png', 'https://www.wegmans.com/', 'Silver'],
  ['1Password', '1password.png', 'https://1password.com/', 'Bronze'],
  ['Art of Problem Solving', 'aops.png', 'https://artofproblemsolving.com/', 'Bronze'],
  ['Jumbo Jumbo', 'jumbo_jumbo.png', 'https://www.jumbojumbocafe.com/', 'Bronze'],
  ['CodeHS', 'codehs.png', 'https://codehs.com/', 'Bronze'],
  ['Interview Cake', 'interview_cake.png', 'https://www.interviewcake.com/', 'Bronze'],
  ['Coca-Cola', 'coca_cola.png', 'https://www.coca-cola.com/us/en', 'Bronze'],
];

const tiers = ['Platinum', 'Silver', 'Bronze'];

export default function Sponsors() {
  return (
    <div className={styles.sectionContainer}>
      <h3>Thank you to our 2026 sponsors!</h3>
      {tiers.map(tier => (
        <section key={tier} className={`${styles.tier} ${styles[tier.toLowerCase()]}`} aria-labelledby={`sponsor-tier-${tier.toLowerCase()}`}>
          <h4 id={`sponsor-tier-${tier.toLowerCase()}`} className={styles.tierHeading}>
            <span aria-hidden="true">✦</span> {tier}
          </h4>
          <div className={styles.grid}>
            {sponsors.filter(sponsor => sponsor[3] === tier).map(([name, file, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name}, 2026 ${tier} sponsor`}>
                <img src={`/sponsors/${file}`} alt={name} loading="lazy" />
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
