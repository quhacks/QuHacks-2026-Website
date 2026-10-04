import Link from 'next/link';
import { DuckMark } from '../freddy';
import styles from './component.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/"><DuckMark /> QuHacks 2027</Link>
        <div className={styles.links}>
          <a href="mailto:info@quhacks.tech">Email</a>
          <a href="https://discord.gg/qYND4HeAdH" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://www.instagram.com/quhacks/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <Link href="/conduct">Code of conduct</Link>
          <Link href="/timeline">Timeline</Link>
          <a href="https://quhacks-2026.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer">Gallery</a>
          <a href="https://quhacks-2026.devpost.com/" target="_blank" rel="noopener noreferrer">2026 Devpost</a>
          <a href="https://hcb.hackclub.com/donations/start/quhacks" target="_blank" rel="noopener noreferrer">Donate</a>
        </div>
        <p>Made by students, for students. © QuHacks 2027</p>
        <small>Website contributors: Ankit Mohanty, Sai Siddhish Chandra Sekaran, Aryan Sharma, Ramy Kaddouri, and Nicole Luo.</small>
      </div>
    </footer>
  );
}
