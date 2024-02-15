import {
  ref,
  set,
  get,
  update,
  remove,
  child,
  push,
  onValue,
  orderByKey,
  query,
  limitToLast
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
    return  newRef.key;
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
    if (!user) {
      throw new Error("User is not authenticated.");
    } // Ensure user is not null
    const userID = user.uid;


    const storyRef = `SavedStories/${userID}/UserStories`
    const parentRef = ref(db,storyRef)
    const firstStoryQuery = query(parentRef, limitToLast(1));
//limitToLast pulls from the bottom of the database which is always updated/new child key
    const snapshot = await get(firstStoryQuery)

    if(snapshot.exists()){
      const stories = []
      
     snapshot.forEach(childSnapshot=>{
      const storyID = childSnapshot.key
      const storyData = childSnapshot.val()

      stories.push({id:storyID,...storyData})
      console.log(`Story Shared ->${storyID}`,stories)
      return stories
     })
     
    }else{
      console.log("No data available at this path."); // Log if no data
      return []
    }
    

    // console.log('StoryEndpointReference',JSON.stringify(storyRef,null,3))

  }catch(error){
console.log('error',error)
  }
};
