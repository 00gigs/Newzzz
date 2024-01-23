import {auth} from "../firebaseconfig"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


//sign up function

 export const  signup  = async (email,password) =>{
    try {
        let userCrediential = await createUserWithEmailAndPassword(auth,email,password)
        return userCrediential.user
    } catch (error) {
        console.log('error signing up',error)
    }
 }


//login function

 export const login = async (email,password)=>{
    try {
        let loggedinCred =  await signInWithEmailAndPassword(auth,email,password)
        return loggedinCred.user
    } catch (error) {
        console.log('error logging in',error)
    }
 }