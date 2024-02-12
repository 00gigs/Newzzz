
import { ReadStory } from "@/app/firebase/firebasecrud/firebasecrud";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import React, { useEffect,useState } from "react";

interface UserStory{
    url:string;
    title:string;
    urlToImage:string;
    description:string;
}


const ShareButton:React.FC<UserStory> =  (story:UserStory) =>{
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
    console.log('shareButton story input: ',story)
    useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      setIsUserAuthenticated(!!user)
      console.log('Authentication State Changed: ', !!user); // Debugging line
    })
    return ()=> unsubscribe()
    }, [])

    const sharefunc = async ()=>{
        console.log('!!!! In sharebutton handleSave !!!!')
        try {
            const snapshotData =  await ReadStory({story});
            console.log('snapshotData: ',JSON.stringify(snapshotData))
            
        } catch (error) {
            console.log('error',error)
        }
        
    }
    return(
        <button onClick={sharefunc} style={{display:'flex'}}>
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/group-foreground-selected.png" alt="group-foreground-selected"/>
        </button>
    )
}

export default ShareButton