import React from 'react'
import Fetch from './Fetch'
import RepoPage from './RepoPage'
import { useParams } from 'react-router-dom'

const RepoDetails = ({userName}) => {
  let params = useParams();
  console.log(params)
  return (
    <div>
    <Fetch url={`https://api.github.com/repos/${userName}/${params.name}`} renderSuccess={RepoPage }  />
      
    </div>
  )
}

export default RepoDetails
