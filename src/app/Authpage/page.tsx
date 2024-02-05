'use client'
import Button from '@mui/material/Button';
import { login, signup} from '../firebase/firebaseAuth/firebaseauth'
import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';

const FirebaseauthPage = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')


const HandleSignup = async() =>{
try {
    let user = await signup(email,password)
   console.log('user created',user)
} catch (error) {
    console.log('failed to create user',error)
}
}


const HandleLogin = async ()=>{
    try{
let user = await login(email,password)
console.log(user,'logged in ')
    }catch(error){
console.log('error logging in',error)
    }
}
  return (
    <div>
    <form>
    <TextField value={email} type='email' onChange={e => setEmail(e.target.value)} required id="outlined-basic" label="Email" variant="outlined" />
    <TextField  value={password} type='password' onChange={e =>setPassword(e.target.value)} required id="outlined-password-input" label="Password"  autoComplete="current-password" />
        {/* <input value={email} type='email' onChange={e => setEmail(e.target.value)} placeholder='enter email'/>
        <input value={password} type='password' onChange={e =>setPassword(e.target.value)} placeholder='create a password'/> */}
        {/* <button >signUp</button>
        <button >LogIn</button> */}
        <Button type='button' onClick={HandleSignup} variant="contained">signUp</Button>
        <Button type='button' onClick={HandleLogin}>LogIn</Button>
    </form>
       
        
    </div>
  )
}

export default FirebaseauthPage

