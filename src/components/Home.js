import React from 'react'
import Fetch from './Fetch'
import Profile from './Profile'

const Home = ({userName}) => {
  return (
    <div>
        <Fetch url={`https://api.github.com/users/${userName}`} renderSuccess={Profile} />
      
    </div>
  )
}

export default Home
