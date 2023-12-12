import React,{useCallback} from 'react'
import Fetch from './Fetch'
import Profile from './Profile'

const Home = ({userName}) => {
  const RenderProfile = useCallback(
    ()=> <Fetch url={`https://api.github.com/users/${userName}`} renderSuccess={Profile} />
    ,[userName]
    )
  return (
    <div>
      <RenderProfile />
      
    </div>
  )
}

export default Home
