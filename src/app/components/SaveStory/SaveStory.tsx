
'use client'

import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { useEffect,useState } from 'react'
import React from 'react'


interface Story{
    url:string
    title:string
    urlToImage:string
    description:string
}

const SaveStory:React.FC<Story> = ({story}) =>{
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
        alert('You must be logged in to save URLs.');
        return;
    }
    try {
        const key = 
    } catch (error) {
        
    }
}
}
