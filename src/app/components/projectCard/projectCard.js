import styles from "./component.module.css"

export default function ProjectCard({project, onClick, className}) {
    return (
        <main className={`${styles.container} ${className}`} onClick={() => onClick(project)}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={(project.screenshot_url && project.screenshot_url.trim().length) > 0 ? project.screenshot_url : "placeholder/quhacks-white.png"} />
            </div>
            <div className={styles.head}>
                <div className={styles.nameContainer}>
                    <h2 className={styles.name}>{project.name}</h2>

                    {project.prize ? 
                        <div className={styles.badge}>
                            [{project.prize.title}]
                        </div>
                        : "" 
                    }
                </div>
                <p>By {project.team_members.join(", ")}</p>
            </div>
            <div className={styles.descContainer}>
                <p>{project.description}</p>
            </div>
            {project.tracks && project.tracks.length > 0 ?
            <div className={styles.tracksContainer}>
                Tracks 
                {project.tracks.map((track, index) => 
                    <div key={index} className={styles.badge}>
                        {track}
                    </div>
                )}
            </div>
            : ""}
        </main>
    )
}