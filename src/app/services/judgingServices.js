'use client'

import { db } from "../firebase/config";
import {
    setDoc,
    getDoc,
    getDocs,
    doc,
    collection,
    updateDoc,
    arrayUnion,
    query,
    where,
} from "firebase/firestore";

// TEAMS

export async function addTeamToDb(email, teamName, userCredential) {
    await setDoc(doc(db, "teams-2025", userCredential.user.uid), {
        email: email,
        teamName: teamName,
        uid: userCredential.user.uid,
    });
}

export async function getTeamFromDb(uid) {
    const querySnapshot = await getDoc(doc(db, "teams-2025", uid));
    return querySnapshot;
}

export async function getAllTeams() {
    const querySnapshot = await getDocs(collection(db, "teams-2025"));
    return querySnapshot;
}

export async function getAllRelevantJudges(teamUID) {
    try {
        const judgesRef = collection(db, "judges-2025");

        const querySnapshot = await getDocs(judgesRef);

        const relevantJudges = querySnapshot.docs
            .map((doc) => {
                const data = doc.data();
                const indices = Array.isArray(data.judging)
                    ? data.judging
                          .map((entry, index) =>
                              entry.uid === teamUID ? index : -1
                          )
                          .filter((index) => index !== -1)
                    : [];
                return indices.length > 0 ? { id: doc.id, data: data, teamIndices: indices } : null;
            })
            .filter((judge) => judge !== null);

        return relevantJudges;
    } catch (error) {
        console.error("Error getting relevant judges: ", error);
        return [];
    }
}

// JUDGES

export async function getJudgeFromDb(uid) {
    const querySnapshot = await getDoc(doc(db, "judges-2025", uid));
    return querySnapshot;
}

export async function getAllJudges() {
    const querySnapshot = await getDocs(collection(db, "judges-2025"));
    return querySnapshot;
}

export async function addJudgeToDb(email, name, userCredential) {
    await setDoc(doc(db, "judges-2025", userCredential.user.uid), {
        email: email,
        name: name,
        uid: userCredential.user.uid,
    });
}

export async function updateJudgingStatus(judgeUID, teamUID, status) {
    const judgeRef = doc(db, "judges-2025", judgeUID);

    const judgeDoc = await getDoc(judgeRef);
    const judging = judgeDoc.data().judging;

    const newJudging = judging.map((team) => {
        if (team.uid === teamUID) {
            team.status = status;
        }
        return team;
    });

    await updateDoc(judgeRef, {
        judging: newJudging,
    });
}

export async function addTeamToJudge(judgeUID, teamUID, status = "pending") {
    const judgeRef = doc(db, "judges-2025", judgeUID);

    await updateDoc(judgeRef, {
        judging: arrayUnion({ uid: teamUID, status: status }),
    });
}
