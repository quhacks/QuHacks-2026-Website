"use client"
import Image from 'next/image'
import styles from './page.module.css'
import AboutSection from './components/about/about';
import ScheduleSection from './components/schedule/schedule';
import TeamSection from './components/team/team';
import Faq from './components/faq/faq';
import Sponsors from './components/sponsors/sponsors';
import { useEffect, useState } from 'react';
import { areSubmissionsOpen, isGalleryOpen } from './services/projectService';
import { useRouter } from 'next/navigation';


export default function Home() {
  let [showRegisterModal, setShowRegisterModal] = useState(false);
  let [submbissionsOpen, setSubmissionsOpen] = useState(false)
  let [galleryOpen, setGalleryOpen] = useState(false)

  const router = useRouter()


  useEffect(() => {
    async function getStatus() {
      setSubmissionsOpen((await areSubmissionsOpen()).open)
      setGalleryOpen(await isGalleryOpen())
    }

    getStatus()
  }, [])

  return (
    <main className={styles.main}>
      {
        showRegisterModal ?  
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h2>Heads Up!</h2>
              </div>
              <div className={styles.modalContent}>
                <p>Clicking the register button below will take you to our event page on Major League Hacking (MLH). If you don't have one already, you will need to create a MyMLH account, then complete the registration process with your new account. If you experience any problems, contact us at <a className={styles.navlink} href="mailto:info@quhacks.tech">info@quhacks.tech</a> or on our <a rel="noreferrer noopener" target='_blank' href="https://discord.gg/quhacks">discord server</a>.</p>
                <p><strong>The registration process is not completed until you receive a registration confirmation email!</strong></p>
                <div className={styles.modalBtns}>
                  <a href="https://events.mlh.io/events/10536-quhacks-2024" rel="noreferrer noopener" target='_blank'  className={`btn-primary ${styles.registerBtn}`} onClick={() => setShowRegisterModal(false)}>Register!</a>
                  <button className="btn-secondary" onClick={() => setShowRegisterModal(false)}>Cancel</button>
                </div>
              </div>
            </div>
        </div>
        : ""
      }
      <div className={styles.announcementBanner}>
        <p>📢  Want to help make QuHacks possible? Donate <a href="https://hcb.hackclub.com/donations/start/quhacks" rel="noreferrer noopener" target="_blank">HERE</a>!</p>
      </div>
      <div className={styles.homecontainer}>
          <Image alt='QuHacks Logo' src="logo.png" width={100} height={100} sizes='(max-width: 750px) 15rem, 20rem' className={styles.logo} />
          <div>
            <span className={styles.title}>QuHacks 2026</span>
            <p>February 7th @ Howard Community College (HCC)</p>
            <div className={styles.btngroup}>
              {/* Logic for register: onClick={() => setShowRegisterModal(true)} */}
              <button className='btn-primary' disabled={true} onClick={() => {window.open("https://forms.gle/ftydZZZT9pJXh1KV7", '_blank', 'noopener, noreferrer');}}>Register To Attend!</button>
              <div className={styles.secondaryBtns}>
                <button className={`btn-secondary ${styles.submitBtn}`} onClick={() => router.push("/team-registration")} disabled={!submbissionsOpen}>Register Your Team!</button>
                <button className={`btn-secondary ${styles.galleryBtn}`} onClick={() => router.push("/gallery")} disabled={!galleryOpen}>View Gallery &gt;</button>
              </div>
            </div>
          </div>
      </div>
      <div className={styles.content} id="about">
        <AboutSection></AboutSection>
      </div>
      <div className={styles.content} id="schedule">
        <ScheduleSection></ScheduleSection>
      </div>
      <div className={styles.content} id="faq">
        <Faq></Faq>
      </div>
      <div className={styles.content} id="sponsors">
        <Sponsors></Sponsors>
      </div>
      <div className={styles.content} id="team">
        <TeamSection></TeamSection>
      </div>
    </main>
  )
}
