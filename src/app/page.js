import Link from 'next/link';
import styles from './page.module.css';
import TeamSection from './components/team/team';
import Sponsors from './components/sponsors/sponsors';
import Faq from './components/faq/faq';
import Freddy from './components/freddy';
import JungleVines from './components/jungleVines';
import { homeTitle, homeDescription, homeStructuredData, pageMetadata } from '../lib/seo';

export const metadata = pageMetadata(homeTitle, homeDescription, '/');

export default function Home() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData).replace(/</g, '\\u003c') }}
      />
      <section id="welcome" className={styles.hero} aria-labelledby="hero-title">
        <img className={styles.jungle} src="/theme/jungle.png" alt="" fetchPriority="high" />
        <div className={styles.heroContent}>
          <p className={styles.anniversary}>10 years of building together</p>
          <h1 id="hero-title">QuHacks <span>2027</span></h1>
          <p className={styles.subtitle}>Maryland’s largest high school hackathon</p>
          <p className={styles.eventDetails}>A free Maryland hackathon for middle &amp; high school students.</p>
          <div className={styles.heroButtons}>
            <a className="btn-primary" href="#about">Explore QuHacks</a>
            <a className="btn-secondary" href="https://discord.gg/qYND4HeAdH" target="_blank" rel="noopener noreferrer">
              Join our Discord
            </a>
          </div>
          <p className={styles.dateNote}>Registration opens soon · Follow along on Discord</p>
        </div>
        <div className={styles.heroDuck}>
          <span className={styles.bubble}>see you in the jungle!</span>
          <Freddy />
        </div>
        <div className={styles.heroFooter}>
          <p className={styles.eventStatus}>Date &amp; location to be decided</p>
          <a className={styles.scroll} href="#about">Enter the jungle <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <div className={styles.forest}>
        <JungleVines className={styles.vinesLeft} />
        <JungleVines className={styles.vinesRight} />
        <div className={styles.content}>
          <section className={styles.about} id="about" aria-labelledby="about-title">
            <div>
              <h2 id="about-title">About QuHacks</h2>
              <p>QuHacks is a free, day-long Maryland high school hackathon run by students, for students. Middle and high schoolers from across Maryland, Washington, D.C., and Virginia come together to code, try something new, and hang out with people who love making things.</p>
              <p>Work on a project with friends, learn something at a workshop, and show off what you made. Never written a line of code? You’re welcome here too!</p>
              <p>This year, we’re celebrating our <strong>10th anniversary</strong> with a jungle theme (and, of course, our duck Freddy).</p>
              <Link className={styles.inlineLink} href="/timeline">See past QuHacks events →</Link>
            </div>
            <div className={styles.aboutDuck}>
              <span className={styles.bubble}>hi, I’m Freddy :)</span>
              <Freddy pose="wave" />
              <div className={styles.log} />
            </div>
          </section>

          <section className={styles.schedule} id="schedule" aria-labelledby="schedule-title">
            <h2 id="schedule-title">Schedule</h2>
            <div className={styles.scheduleNote}>
              <div className={styles.scheduleDuck}><Freddy pose="note" /></div>
              <div>
                <h3>We’re still planning the day!</h3>
                <p>The 2027 schedule will be posted here once it’s ready. Expect time for hacking, workshops, meeting teammates, and sharing your projects.</p>
                <a className={styles.inlineLink} href="https://discord.gg/qYND4HeAdH" target="_blank" rel="noopener noreferrer">Get updates on Discord →</a>
              </div>
            </div>
          </section>

          <section className={styles.section} id="faq"><Faq /></section>

          <section className={styles.section} id="sponsors" aria-labelledby="sponsors-title">
            <div className={styles.sponsorHeading}>
              <div>
                <h2 id="sponsors-title">Sponsors</h2>
                <p>Want to help keep QuHacks free? Check out our <a className={styles.inlineLink} href="/QuHacks-2027-Sponsorship.pdf" target="_blank" rel="noopener noreferrer">sponsorship prospectus</a> or email <a className={styles.inlineLink} href="mailto:info@quhacks.tech">info@quhacks.tech</a>.</p>
              </div>
              <div className={styles.sponsorDuck} aria-hidden="true"><Freddy pose="wave" /></div>
            </div>
            <Sponsors />
          </section>

          <section className={styles.section} id="team"><TeamSection /></section>
        </div>
      </div>
    </main>
  );
}
