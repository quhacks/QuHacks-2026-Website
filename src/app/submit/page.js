"use client"
import { useState } from 'react'
import styles from "./page.module.css"
import { submitProject, areSubmissionsOpen } from "../services/projectService.js"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function SubmissionFormPage() {
    const [memberName, setName] = useState('');
    const [members, setMembers] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [memberId, setId] = useState(0);
    const [pending, setPending] = useState(false)

    const toastProps = (success) => ({
        hideProgressBar: true,
        closeButton: true,
        className: success ? styles.toastSuccess : styles.toastError,
        closeButton: () => <span>[x]</span>
    })

    async function attemptSubmission() {

        let submissionsOpen = await areSubmissionsOpen();

        if (submissionsOpen.open) {

            let validation = validateSubmission();
            if (validation[0]) {
                setPending(true)
                submitProject(validation[1], () => {
                    setPending(false)
                    toast("Your project has been successfully submitted!", {
                        ...toastProps(true)
                    })
                });
            } else {
                toast(validation[1], {...toastProps(false)});
            }

        } else {
            toast("Submissions are closed!", {...toastProps(false)});
        }
    }
    
    // returns [false, "reason for failure"] if submission is invalid
    // returns [true, projectObject] if submission is valid
    function validateSubmission() {
        let projectName = document.getElementById("projectName").value;
        let desc = document.getElementById("description").value;
        let screenshot = document.getElementById("screenshot").files[0];
        let github = document.getElementById("github").value;
        let demo = document.getElementById("demo").value;
        let builtWith = document.getElementById("builtWith").value;
        let publicProject = document.getElementById("publicCheck").checked;

        let tracks = ["overall"];

        if (document.getElementById("aiCheck").checked) {
            tracks.push("AI");
        }

        if (document.getElementById("beginnerCheck").checked) {
            tracks.push("beginner");
        }

        if (projectName.trim().length < 1) {
            return [false, "Please enter your project's name."];
        }

        if (members.length < 1) {
            return [false, "Please list all team members."];
        }

        if (desc.trim().length < 1) {
            return [false, "Please include a description of your project."];
        }

        if (!screenshot) {
            return [false, "Please include at least one screenshot of your project."];
        }

        if (members.length == 1) {
            tracks.push("individual");
        }

        if (tracks.length < 1) {
            return [false, "Select at least one track."];
        }

        let project = {
            description: desc,
            name: projectName,
            public: publicProject,
            screenshot: screenshot,
            team_members: members.map(m => m.name),
            tracks: tracks,
            prize: null
        }

        if (github.trim()) {
            project.github = github;
        }
        if (builtWith.trim()) {
            project.built_with = builtWith;
        }
        if (demo.trim()) {
            project.demo = demo;
        }
        return [true, project];
    }

    return (
        <main>
            {pending ? 
            <div className={styles.pendingContainer}>
                <h1>
                    Submitting...
                </h1>
                <p>Please wait</p>
            </div> : ""
            }
            <ToastContainer/>
            <div className={styles.content}>
                <div className={styles.headContainer}>
                    <div className={styles.head}>
                        <div className={styles.headtext}>
                            <h1>Submission Form</h1>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className={styles.sectionContainer}>
                    <div className={styles.section}>
                        <h2>Project Name</h2>
                        <input className={styles.input} id="projectName"></input><br></br><br></br>
                        <h2>Team Members (enter names one at a time)</h2>
                        <div className={styles.memberfield}>
                            <input
                                value={memberName}
                                onChange={e => setName(e.target.value)}
                            />
                            <button disabled={members.length >= 4 || memberName.trim().length == 0} className='btn-primary' type="addMember" onClick={() => {
                                setMembers([
                                    ...members,
                                    { id: memberId, name: memberName }
                                ]);
                                setId(memberId+1)
                            }}>Add Member</button>
                        </div>
                        
                        {members.length > 0 ? <h2>Team members: </h2> : ""}
                        <ul className={styles.list}>
                            {members.map(member => (
                                <li key={member.id} className={styles.memberName} onClick={() => {
                                    setMembers(
                                        members.filter(a =>
                                            a.id !== member.id
                                        )
                                    );
                                }}>
                                    {member.name}</li>
                            ))}
                        </ul>
                        <br></br>
                        <h2>Description</h2>
                        <textarea className={styles.textarea} id="description"></textarea><br></br><br></br>
                        <h2>Screenshot of Project</h2>
                        <input type="file" id="screenshot" accept="image/png, image/jpeg" className={styles.screenshotInput} /><br></br><br></br>
                        <h2>Select Project Tracks Below: </h2>
                        <input className={styles.checkbox} id="aiCheck" type="checkbox" />
                        <label >  AI</label><br></br>
                        <input className={styles.checkbox} id="beginnerCheck" type="checkbox" />
                        <label >  Beginner</label>
                        <br></br><br></br>
                        <h2>Link to Project GitHub (optional) </h2>
                        <input className={styles.input} id="github"></input><br></br><br></br>
                        <h2>Link to Project Demo (optional)</h2>
                        <input className={styles.input} id="demo"></input><br></br><br></br>
                        <h2>Languages, technologies, libraries used (optional)</h2>
                        <input className={styles.input} id="builtWith"></input><br></br><br></br>
                        <h2>Do you want your project to be displayed in our project gallery?</h2>
                        <input className={styles.checkbox} id="publicCheck" type="checkbox" defaultChecked />
                        <label >  Yes</label>
                        <br></br><br></br>
                        <button className='btn-primary' type="submit" onClick={attemptSubmission}>Submit</button>
                    </div>
                </div>
            </div>
        </main>
    )
}