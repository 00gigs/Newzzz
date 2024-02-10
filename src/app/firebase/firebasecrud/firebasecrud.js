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

    const urlRef = ref(db, `SavedStories/${userID}/UserStory->`);
    const newRef = push(urlRef);
    await set(newRef, story);
  } catch {}
};

/**
 * Fetches a story from Firebase Realtime Database.
 * @return {Promise<{url: string, title: string, urlToImage: string, description: string }>} The story object.
 */
export const ReadStory = async () => {
  const storyRef = ref(db, `SavedStories/${userID}/UserStory->`);
  try {
    const snapshot = await get(storyRef);
    if (snapshot.exists()) {
      console.log('Story data:', snapshot.val());
      return snapshot.val(); // Assuming the story is directly stored as an object
    } else {
      console.log('No story available');
      return Promise.reject('No story available');
    }
  } catch (error) {
    console.error('Error fetching story:', error);
    return Promise.reject(error);
  }
};
