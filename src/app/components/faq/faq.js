import FaqQuestion from './FaqQuestion/faqQuestion'
import styles from './component.module.css'

export default function Faq() {

    return (
        <div className={styles.sectionContainer}>
            <h1 className={styles.title}>FAQ</h1>
            <div className={styles.container}>
                <div className={styles.column}>
                    <FaqQuestion 
                        question={"What is a Hackathon?"} 
                        answer={`A hackathon is a coding marathon - it's like a real-time programming fair where students develop an idea and bring it to life through code. A project could be a game, website, app, robot, Arduino project, whatever! If you enjoy programming or technology in general, hackathons are great places to meet friendly, like-minded people.`}
                        />
                    <FaqQuestion 
                        question={"Do I need to know how to code?"}
                        answer={`No, you don't! Even if you aren't able to code beforehand, you can attend workshops, learn some code, and still submit a project. We will have both a novice division (set up specifically for those new to coding) and a main division, and the "Intro to Programming" workshop is tailor made for new programmers.`}
                    />
                    <FaqQuestion 
                        question={"Who can attend?"} 
                        answer={`You are eligible to participate in QuHacks 2025 if you currently attend middle or high school. If you have already graduated but would still like to attend the event, please consider volunteering or mentoring for the event! Send us an email at info@quhacks.tech for more information on contributing to QuHacks, or if you have any questions about our eligibility.`}
                    />
                    <FaqQuestion 
                        question={"How much does QuHacks cost?"} 
                        answer={`Nothing! This event is entirely free of charge, thanks to our awesome sponsors. If you're interested in becoming a sponsor, please email us at info@quhacks.tech.`}
                    />
                    <FaqQuestion 
                        question={"Can I win any prizes?"} 
                        answer={`But of course! You can win both swag and cool tech! You'll have the chance to win gaming monitors, tablets, headphones, drones, and more...`}
                    />
                </div>
                <div className={styles.column}>
                    <FaqQuestion 
                        question={"What do I need to compete?"} 
                        answer={`The only thing you need is a device that can connect to the internet, and any materials needed for creating your hack!`}
                    />
                    <FaqQuestion 
                        question={"Where is QuHacks?"} 
                        answer={`QuHacks will be held at the Johns Hopkins Applied Physics Laboratory this year, in Building 201. APL's Building 201 is located at 11091 Johns Hopkins Rd, Fulton, MD 20723!`}
                    />
                    <FaqQuestion 
                        question={"Can I use past projects?"} 
                        answer={`Anyone caught working on past projects will be forced to sit in the corner and wear the dunce hat. Seriously though, don't be that one person.`}
                    />
                    <FaqQuestion 
                        question={"What if I don't have a team?"} 
                        answer={`No problem! Many participants sign up without a team, and you can meet and work with new friends. You may also choose to work alone. The limit is 4 people per team.`}
                    />
                    <FaqQuestion 
                        question={"Who's Freddy?"} 
                        answer={`At some point, Freddy had a cheesy description here. However, we can't seem to decide what Freddy is, so we'll just say he's that one duck you keep seeing around on this website.`}
                    />
                </div>
            </div>
        </div>
    )
}
