
'use client'
import { saveUrlToFirebase } from '@/app/firebase/firebasecrud/firebasecrud'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import { useEffect,useState } from 'react'

import React from 'react'


interface SaveURLButtonProps {
  url :string;
}

const SaveButtonURL:React.FC<SaveURLButtonProps> = ({url}) => {

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

useEffect(() => {
const auth = getAuth()

const unsubscribe = onAuthStateChanged(auth,(user)=>{
  setIsUserAuthenticated(!!user)
  console.log('Authentication State Changed: ', !!user); // Debugging line
})
return ()=> unsubscribe()
}, [])


const handleSave = async () =>{
  console.log('Attempting to save URL. Authenticated:',isUserAuthenticated ); // Debugging line
  if(!isUserAuthenticated){
    alert('You must be logged in to save URLs.');
    return;
  }
  try{
    const key = await saveUrlToFirebase(url)
    console.log(`url saved with key ${key}`)
  }catch(error){
    console.error('failed saving url', error)
  }
}



  return (
    <button  onClick={handleSave} style={{display:'flex'}}>
    <img  width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/bookmark-ribbon.png" alt="bookmark-ribbon"/>
    </button>
  )
}

export default SaveButtonURL