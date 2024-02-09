import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  push,
  onValue,
} from "firebase/database";
import { db } from "../firebaseconfig/firebaseconfig";
import { getAuth, User } from "firebase/auth";


export const saveUrlToFirebase = async (url) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      throw new Error("no user authenticated");
    }
    const userID = user.uid;

    const urlRef = ref(db, `userUrls/${userID}/urls`);
    const newRef = push(urlRef);
    await set(newRef, { url });
    alert(url + " " + `added to id ${userID}`);
    return newRef.key;
  } catch (error) {
    console.error("Error saving URL to Firebase:", error);
    alert("error" + error);
    throw error;
  }
};

export const ShareToCommunity = async ({ story }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      throw new Error("no user authenticated");
    }
    const userID = user.uid;

    const urlRef = ref(db, `SavedStories/${userID}/UserStory->`);
    const newRef = push(urlRef);
    await set(newRef, story);
  } catch {}
};

export const ReadStory =  () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    userID = user.uid;

    const storyObjRef = ref(db, `SavedStories/${userID}/UserStory->`);
     onValue(storyObjRef, (snapshot) => {
      const RawData = snapshot.val();
alert(RawData)

    });
  } catch (error) {
    console.log('failed',error)
  }
};
