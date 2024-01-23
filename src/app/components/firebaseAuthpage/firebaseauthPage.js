import { login, signup} from '../../firebase/firebaseAuth/firebaseauth'
import React from 'react'
import { useState } from 'react'
const firebaseauthPage = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const handleSignup = async() =>{
try {
    let user = await signup(email,password)
   console.log('user created',user)
} catch (error) {
    console.log('failed to create user',error)
}
}


const handleLogin = async ()=>{
    try{
let user = await login(email,password)
console.log('user created',user)
    }catch(error){
console.log('error logging in',error)
    }
}



  return (
    <div>

    
        <input value={email} type='email' onChange={e => setEmail(e.target.value)} placeholder='enter email'/>
        <input value={password} type='password' onChange={e =>setPassword(e.target.value)} placeholder='create a password'/>
        <button onClick={handleSignup}>signUp</button>
        <button onClick={handleLogin}>LogIn</button>
     
        
    </div>
  )
}

export default firebaseauthPage

