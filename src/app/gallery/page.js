"use client";
import ProjectCard from "../components/projectCard/projectCard";
import { getProjects, isGalleryOpen } from "../services/projectService";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function GalleryPage() {
    const [projects2024, setProjects2024] = useState([]);
    const [projects2025, setProjects2025] = useState([]);
    const [displayProjects, setDisplayProjects] = useState([]);
    const [emptyMsg, setEmptyMsg] = useState("Loading Gallery...");
    const [query, setQuery] = useState("");
    const [track, setTrack] = useState("all");
    const [activeTab, setActiveTab] = useState("2025");

    // Modal state
    const [showProjectModal, setShowProjectModal] = useState(false);
    const [project, setProject] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setEmptyMsg("Loading Gallery...");
            if (await isGalleryOpen()) {
                try {
                    const [proj2024, proj2025] = await Promise.all([getProjects(2024), getProjects(2025)]);
                    setProjects2024(proj2024);
                    setProjects2025(proj2025);

                    if (proj2025.length === 0) {
                        setEmptyMsg("No projects available for 2025.");
                    }
                } catch (error) {
                    console.error("Error fetching projects:", error);
                    setEmptyMsg("Error loading gallery. Please try again.");
                }
            } else {
                setEmptyMsg("The gallery isn't open.");
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const projects = activeTab === "2024" ? projects2024 : projects2025;
        const filteredProjects = filter(projects);

        setDisplayProjects(filteredProjects);

        if (filteredProjects.length === 0) {
            setEmptyMsg(activeTab === "2024" ? "No projects available for 2024." : "No projects available for 2025.");
        }
    }, [activeTab, query, track, projects2024, projects2025]);

    function filter(allProjects) {
        return allProjects
            .filter((proj) =>
                (proj.name + proj.description + proj.team_members.join(" ")).toLowerCase().includes(query.toLowerCase())
            )
            .filter((proj) => track === "all" || proj.tracks.map(t => t.toLowerCase()).includes(track.toLowerCase()))
            .filter((proj) => proj.public)
            .sort((a, b) => {
                if (a.prize && b.prize) {
                    return a.prize.rank - b.prize.rank;
                } else if (a.prize) {
                    return -1;
                } else if (b.prize) {
                    return 1;
                } else {
                    return 0;
                }
            });
    }

    const withHttp = url => !/^https?:\/\//i.test(url) ? `https://${url}` : url;

    function showModal(project) {
        setProject(project);
        setShowProjectModal(true);
    }

    return (
        <main className={styles.main}>
            {showProjectModal && project && (
                <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h2>{project.name}</h2>
                            <p>By {project.team_members.join(", ")}</p>
                        </div>
                        <div className={styles.modalContent}>
                            <h2>Description</h2>
                            <p>{project.description}</p>
                            {project.built_with && project.built_with.trim().length !== 0 && (
                                <p>
                                    <em>Built with: {project.built_with}</em>
                                </p>
                            )}
                            <div className={styles.modalBtns}>
                                {project.demo && (
                                    <a
                                        href={withHttp(project.demo)}
                                        rel="noreferrer noopener"
                                        target="_blank"
                                        className={`btn-primary ${styles.demobtn}`}
                                    >
                                        Try it!
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={withHttp(project.github)}
                                        rel="noreferrer noopener"
                                        target="_blank"
                                        className={`btn-secondary ${styles.gitbtn}`}
                                    >
                                        Github
                                    </a>
                                )}
                                <button className="btn-secondary" onClick={() => setShowProjectModal(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.headerContainer}>
                <h1>Project Gallery</h1>
                <div className={styles.searchOptions}>
                    <input
                        placeholder="Search"
                        className={styles.searchBox}
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                    <select className={styles.trackSelect} value={track} onChange={(e) => setTrack(e.target.value)}>
                        <option value="all">All Tracks</option>
                        <option value="math">Math</option>
                        <option value="ai">AI</option>
                        <option value="game">Game</option>
                        <option value="beginner">Beginner</option>
                        <option value="advanced">Advanced</option>
                        <option value="individual">Individual</option>
                    </select>
                </div>
                <div className={styles.tabContainer}>
                    <button
                        className={`${styles.tabButton} ${activeTab === "2024" ? styles.active : ""}`}
                        onClick={() => setActiveTab("2024")}
                    >
                        2024
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === "2025" ? styles.active : ""}`}
                        onClick={() => setActiveTab("2025")}
                        disabled={(!projects2025 || projects2025.filter((proj) => proj.public).length === 0)}
                    >
                        2025
                    </button>
                </div>
            </div>
            {displayProjects.length === 0 ? (
                <div className={styles.emptyContainer}>
                    <div className={styles.noResultContainer}>
                        <h1 style={{ color: "var(--text-accent)" }}>&gt;</h1>
                        <h1>{emptyMsg}</h1>
                    </div>
                </div>
            ) : (
                <div className={styles.galleryContainer}>
                    {displayProjects.map((proj, index) => (
                        <ProjectCard key={index} className={styles.project} project={proj} onClick={() => showModal(proj)} />
                    ))}
                </div>
            )}
        </main>
    );
}
