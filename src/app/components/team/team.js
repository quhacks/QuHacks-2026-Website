import styles from './component.module.css';
import TeamCard from './teamcard/teamcard'
import Link from 'next/link';

export default function TeamSection() {
    let teamCards = [
        // Director
        ["Ankit Mohanty", "Director", "headshots/ankit_headshot.png"],
        ["Jayson Liu", "Director", "headshots/jayson_headshot.jpg"],


        // Outreach
        ["Nicholas Chen", "Outreach Lead", "headshots/nicholas_headshot.jpg", "center %"],
        ["Minul Wehella-Gamage", "Outreach", "headshots/minul_headshot.jpg", "center 5%"],

        // Sponsor
        ["Evan Luo", "Sponsor Lead", "headshots/evan_headshot_cropped.jpeg"],
        ["Roshan Gopi", "Sponsor", "headshots/roshan_headshot.jpg"],

        // Website
        ["Zachary Schmelzer", "Website", "headshots/zachary_headshot.jpg"],
        ["Ehaan Akbar", "Website", "headshots/ehaan_headshot.jpg"],
        ["Vrukshav Viswanath", "Website", "headshots/vrukshav_headshot.jpg"],


        // Graphic Design
        ["Rudra Jhawar", "Graphics Lead", "headshots/rudra_headshot.png"],
        ["Skanda Rajkumar", "Graphics", "headshots/skanda_headshot.jpg"],
        // Workshop
        ["Tarinika Pawar", "Workshop", "headshots/tarinika_headshot_cropped.jpg"],
    ]

    teamCards = teamCards.map((card) => {
        return (
            <TeamCard
                name={card[0]}
                position={card[1]}
                image={card[2]}
                objectPosition={card[3]}
                key={card[0]}
            />
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
