import React from "react";

import React from 'react'

const signuppage = () => {
  return (
    <div>
            <h2>sign up</h2>
            <form form="signUp">
                <label for="email" >Email
                </label>
                <input id="email" type="email" placeholder="Enter email" ref={emailRef}/>
                <label for="password">Password
                </label>
                <input type="password" placeholder="create a password" id="password" ref={passwordRef}/>
                <label for="passwordconfirmation">Password Confirmation
                </label>
                <input type="password" placeholder="create a password" id="passwordconfirmation" ref={passwordconfirmationRef}/>
                <button >Sign up</button>
            </form>


        <div>
            already signed up ? log in
        </div>
    </div>
  )
}

export default signuppage