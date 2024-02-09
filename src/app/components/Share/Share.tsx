
import { ReadStory } from "@/app/firebase/firebasecrud/firebasecrud";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";

interface UserStory{
    url:string;
    title:string;
    urlToImage:string;
    description:string;
}


const ShareButton =  (story:UserStory) =>{
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

    useEffect(() => {
    const auth = getAuth()
    
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      setIsUserAuthenticated(!!user)
      console.log('Authentication State Changed: ', !!user); // Debugging line
    })
    return ()=> unsubscribe()
    }, [])

    

    try {
        const snapshotData =  ReadStory()
        console.log(snapshotData)
    } catch (error) {
        console.log('error',error)
    }
}

export default ShareButton