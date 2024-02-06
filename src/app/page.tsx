'use client'
import React from 'react'
import Nav from './components/Nav/page'
import Community from './components/community/page'
import Missed from './components/missed/page'
import New from './components/new/page'
import Recommended from './components/recommended/page'
import Trending from './components/trending/page'
import MyComponent from './components/UserAuth/page'


 


    
 


const Home = () => {
  return (
    <div>
        <Nav />
      <div className='wrapper'>
        <div className="grid3"> <New /></div>
        <div className="grid1"><Community /></div>
        <div className="grid2"><Missed /></div>
        <div className="grid4"><Recommended /></div>
        <div className="grid5"><Trending /></div>
        <MyComponent/>
      </div>
 ©  2024 James Harrington Co.All rights reserved.
    </div>
  )
}

export default Home