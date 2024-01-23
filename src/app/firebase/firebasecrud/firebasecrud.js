import ConfigurationDB from "../firebaseconfig/firebaseconfig";
import { useState } from "react";
import {ref,set,get,update,remove,child, push} from "firebase/database"



export const saveUrlToFirebase = async (url) => {
    const db = ConfigurationDB()
  try {
    const urlRef = ref(db,('urls'))
    const newRef = push(urlRef)
    await set(newRef,{url})
    alert(url+' '+'added')
    return newReference.key;
  } catch (error) {
    console.error('Error saving URL to Firebase:', error);
    alert('error' + error)
    throw error;
  }
};



 


