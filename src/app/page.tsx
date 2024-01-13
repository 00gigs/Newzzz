'use client'
import React from 'react'
import Nav from './components/Nav/page'
import Community from './components/community/page'
import Missed from './components/missed/page'
import New from './components/new/page'
import Recommended from './components/recommended/page'
import Trending from './components/trending/page'


const Home = () => {
  return (
    <div>
      <Nav />
      <div className="grid"><Community /></div>
      <div className="grid"><Missed /></div>
      <div className="grid"> <New /></div>
      <div className="grid"><Recommended /></div>
      <div className="grid"><Trending /></div>
    </div>
  )
}

export default Home