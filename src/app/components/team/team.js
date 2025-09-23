import styles from './component.module.css';
import TeamCard from './teamcard/teamcard'
import Link from 'next/link';

export default function TeamSection() {
    let teamCards = [
        ["Aryan Sharma", "Director", "headshots/aryan_headshot.jpg"],
        ["Victor Liu", "Director", "headshots/victor_headshot.jpg"],
        
        ["Joshua Oh", "Graphic Design Lead", "headshots/joshua_headshot.jpeg"],
        ["Aditri Maiti", "Graphic Design", "headshots/aditri_headshot.jpg"],
        ["Anjali Vallabhaneni", "Graphic Design", "headshots/anjali_headshot.jpg"],
        ["Jiwon Kim", "Graphic Design", "headshots/jiwon_headshot.png"],

        ["Barry Chen", "Sponsor", "headshots/barry_headshot.jpg"],
        ["Kevin Yue", "Sponsor", "headshots/kevin_headshot.png"],
        ["Rana Cherukuri", "Sponsor", "headshots/rana_headshot.png"],

        ["Sai Chandra", "Website Lead", "headshots/sai_headshot.jpg"],
        ["Mark Shi", "Website", "headshots/mark_headshot.jpg"],

        ["Jaden Li", "Workshop Lead", "headshots/jaden_headshot.jpg"],
        ["Suhas Anumolu", "Workshop", "headshots/suhas_headshot.jpg"],
        ["Zak Mazerski", "Workshop", "headshots/zak_headshot.jpg"],
    ]

    teamCards = teamCards.map((card) => {
        return (
            <TeamCard name={card[0]} position={card[1]} image={card[2]} key={card[0]} />
        )
    });

    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>Meet the Team</h1>
            <div className={styles.cards}>
                {teamCards}
            </div>
        </div>
    )
};
