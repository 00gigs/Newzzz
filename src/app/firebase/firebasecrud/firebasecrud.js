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

export const SaveInfo = async ({ story }) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      throw new Error("no user authenticated");
    }
    const userID = user.uid;

    const urlRef = ref(db, `SavedStories/${userID}/UserStories`);
    const newRef = push(urlRef);
    await set(newRef, story);
    return newRef.key;
  } catch {}
};

/**
 * Fetches a story from Firebase Realtime Database.
 * @return {Promise<{url: string, title: string, urlToImage: string, description: string }>} The story object.
 */
export const ReadStory = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) throw new Error("User is not authenticated."); // Ensure user is not null

    const storyRef = ref(db, `SavedStories/${user.uid}/UserStories`);

    get(child(db, storyRef)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
};
