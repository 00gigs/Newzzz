'use client'
import Button from '@mui/material/Button';
import { login, signup} from '../firebase/firebaseAuth/firebaseauth'
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';




const FirebaseauthPage = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [user, setUser] = useState(null)


useEffect(() => {
    const auth = getAuth()
  const unsubscirbe  = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })
  return () => unsubscirbe()
  }, [])



const clearForm = () => {
    setEmail('');
    setPassword('');
};

const HandleSignup = async () => {
    try {
        
        // Firebase Auth will automatically reject the signup if the user already exists.
        let userCredential = await signup(email, password);
        console.log('User created', userCredential);
    } catch (error) {
        //👇🏻doesn't alert user on screen email adress is already in use please log in
        if (error.code === 'auth/email-already-in-use') {
            console.log('Email already in use. Please log in or use a different email.');
        } else {
            console.log(error);
        }
    }
    clearForm();
};


// WHEN LOGGED IN AUTOMATICALLY REDIRECT TO HOMEPAGE
const HandleLogin = async ()=>{
    const auth = getAuth()
    if(auth){
        try{
            let user = await login(email,password)
            if(user){
                console.log(user,'logged in ')
                
            }else{
                console.log('try again')
            }
                }catch(error){
            console.log('error logging in',error)
                }
    }else{
        console.log('you need to sign up first')
    }
 
    clearForm()
}
  return (
    
    <div>
    <form

    >
    <TextField value={email} type='email' onChange={e => setEmail(e.target.value)} required id="outlined-basic" label="Email" variant="outlined" />
    <TextField  value={password} type='password' onChange={e =>setPassword(e.target.value)} required id="outlined-password-input" label="Password"  autoComplete="current-password" />

        <Button type='button' onClick={HandleSignup} variant="contained">signUp</Button>
        <Button type='button' onClick={HandleLogin}>LogIn</Button>
    </form>
       
        
    </div>
  )
}

export default FirebaseauthPage

