import styles from './component.module.css';
import TeamCard from './teamcard/teamcard'
import Link from 'next/link';

export default function TeamSection() {
    let teamCards = [
        // Director
        ["Sai Chandra", "Director", "headshots/sai_headshot.jpg"],
        ["Joshua Oh", "Director", "headshots/joshua_headshot_cropped.jpeg"],

        // Graphic Design
        
        // Outreach
        ["Aditri Maiti", "Outreach Lead", "headshots/aditri_headshot_cropped.jpg"],
        ["Jeremy Tao", "Outreach", "headshots/jeremy_headshot_cropped.jpg"],
        
        // Sponsor
        ["Rana Cherukuri", "Sponsor Lead", "headshots/rana_headshot_cropped.jpeg"],
        ["Daniel Gao", "Sponsor", "headshots/daniel_headshot_cropped.jpg"],
        ["Evan Luo", "Sponsor", "headshots/evan_headshot_cropped.jpeg"],
        
        // Website 
        ["Ankit Mohanty", "Website", "headshots/ankit_headshot_cropped.png"],
        ["Navya Rachakonda", "Website", "headshots/navya_headshot_cropped.png"],

        // Workshop
        ["Suhas Anumolu", "Workshop Lead", "headshots/suhas_headshot.jpg"],
        ["Jayson Liu", "Workshop", "headshots/jayson_headshot.jpg"],
        ["Tarinika Pawar", "Workshop", "headshots/tarinika_headshot_cropped.jpg"],
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
