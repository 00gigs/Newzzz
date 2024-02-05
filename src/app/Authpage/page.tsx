'use client'

import { login, signup} from '../firebase/firebaseAuth/firebaseauth'
import React from 'react'
import { useState } from 'react'


const FirebaseauthPage = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


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

    <form >
        <input value={email} type='email' onChange={e => setEmail(e.target.value)} placeholder='enter email'/>
        <input value={password} type='password' onChange={e =>setPassword(e.target.value)} placeholder='create a password'/>
        <button type='button' onClick={HandleSignup}>signUp</button>
        <button type='button' onClick={HandleLogin}>LogIn</button>
    </form>
       
        
    </div>
  )
}

export default FirebaseauthPage

