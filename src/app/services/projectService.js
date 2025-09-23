import { db, fileDB } from "../firebase/config";
import { getDoc, getDocs, doc, setDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Compressor from 'compressorjs';

/*
{
    name: "Test project",
    description: "a test project",
    team_members: ["Person 1", "Person 2"],
    screenshot_url: "https://source.unsplash.com/random",
    tracks: ["game", "ai"],
    github: "<URL>",
    demo: "<URL>",
    built_with: "Kotlin, OpenGL",
    public: true,
    prize: {
        title: "1st place", rank: 0
    }
}
*/
function submitProject(project, success) {
    let file = project.screenshot;
    delete project.screenshot;

    let projectID = uuid();

    const projectDoc = doc(db, "projects-2025/"+projectID);
    const screenshotRef = ref(fileDB, projectID+"-"+file.name);

    new Compressor(file, {
        quality: 0.2,
        success(result) {
            uploadBytes(screenshotRef, result).then(snapshot => {
                getDownloadURL(screenshotRef).then(url => {
                    project.screenshot_url = url;
                    setDoc(projectDoc, project);
                    success();
                    
                });
            });
        }
    });
    
}

function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

async function areSubmissionsOpen() {
    return (await getDoc(doc(db, "config", "form"))).data();
}

async function isGalleryOpen() {
    return (await getDoc(doc(db, "config", "gallery"))).data().open;
}

async function getProjects(year) {
    const collectionPath = year === 2024 ? "projects" : `projects-${year}`;
    const snapshot = await getDocs(collection(db, collectionPath));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export {submitProject, areSubmissionsOpen, getProjects, isGalleryOpen};