import React from 'react';
import Fetch from './Fetch';
import Projects from './Projects';

const Repos = ({userName}) => {
  return (
    <div>
        <Fetch url={`https://api.github.com/users/${userName}/repos`} renderSuccess={Projects} />
      
      
    </div>
  )
}

export default Repos
