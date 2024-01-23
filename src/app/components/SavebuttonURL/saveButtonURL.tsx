import { saveUrlToFirebase } from '@/app/firebase/firebasecrud/firebasecrud'

import React from 'react'


interface SaveURLButtonProps {
  url :string;
}

const SaveButtonURL:React.FC<SaveURLButtonProps> = ({url}) => {
const handleSave = async () =>{
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