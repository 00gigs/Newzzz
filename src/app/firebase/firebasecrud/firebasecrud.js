import ConfigurationDB from "../firebaseconfig/firebaseconfig";
import { useState } from "react";
import {ref,set,get,update,remove,child, push} from "firebase/database"
import { db } from "../firebaseconfig/firebaseconfig";
import { getAuth } from 'firebase/auth';


export const saveUrlToFirebase = async (url) => {
  try {
    const auth = getAuth()
    const user =  auth.currentUser
    if(!user){
      throw new Error('no user authenticated')
    }
    const userID = user.uid

    const urlRef = ref(db,(`userUrls/${userID}/urls`))
    const newRef = push(urlRef)
    await set(newRef,{url})
    alert(url+' '+`added to id ${userID}`)
    return newRef.key;
  } catch (error) {
    console.error('Error saving URL to Firebase:', error);
    alert('error' + error)
    throw error;
  }
};



 


