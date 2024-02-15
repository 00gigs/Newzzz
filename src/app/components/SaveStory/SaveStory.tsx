
'use client'
import { SaveInfo } from '@/app/firebase/firebasecrud/firebasecrud'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { useEffect,useState } from 'react'
import React from 'react'
import { ReadStory } from '@/app/firebase/firebasecrud/firebasecrud'

interface Story{

    url:string;
    title:string;
    urlToImage:string;
    description:string;
}

const SaveStory:React.FC<Story> = (story:Story) =>{
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)


useEffect(() => {
 const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        setIsUserAuthenticated(!!user)
        console.log('Authentication State Changed: ', !!user); 
    })
    return ()=> unsubscribe()
}, [])

const handleSave = async () =>{
    console.log('Attempting to save story. Authenticated:', isUserAuthenticated )
    if(!isUserAuthenticated){
        alert('YYou must be logged in to use the Save Feature .');
        return;
    }
    try {
        console.log('story object: ',JSON.stringify(story,null, 3));
        const key = await SaveInfo({story})
        // await ReadStory(key)
        // console.log("key object: ",JSON.stringify(key, null, 3))
        console.log(`Story saved with key ${key}`)
    } catch (error) {
        console.log('failed saving Story', error)
    }
}


return (
    <button  onClick={handleSave} style={{display:'flex'}}>
    <img width="64" height="64" src="https://img.icons8.com/cotton/64/save.png" alt="save"/>
    </button>
  )
}

export default SaveStory
