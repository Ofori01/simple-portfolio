import React from 'react'
import Link from './Link'


const Projects = ({data}) => {
    console.log(data)

if (!Array.isArray(data)) {
    return <div>No projects available</div>;
    }
if(data) return (
    <div>
        <ul>
        {
            data && data.map(({name, html_url,id})=> <li key={id}> <Link url={html_url} title={name} /> </li>)
        
        }

        </ul>
      
    </div>
  )
}

export default Projects
