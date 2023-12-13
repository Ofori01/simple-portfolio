import React from 'react'
import Fetch from './Fetch'
import RepoPage from './RepoPage'
import { useParams } from 'react-router-dom'

const RepoDetails = ({userName}) => {
  const {name} = useParams();
  console.log(useParams())
  return (
    <div>
    <Fetch url={`https://api.github.com/repos/${userName}/${name}`} renderSuccess={RepoPage }  />
      
    </div>
  )
}

export default RepoDetails
