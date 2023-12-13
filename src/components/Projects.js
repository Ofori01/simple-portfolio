import React from 'react'
import { useNavigate, Link } from 'react-router-dom'



const Projects = ({data}) => {
    

    console.log(data)

if (!Array.isArray(data)) {
    return <div>No projects available</div>;
    }
if(data) return (
    <div>
        <ul>
        {
            data && data.map(({name, html_url,id})=> <li key={id} > <Link to={`/repos/:${name}`}>{name}</Link> </li>)
        
        }

        </ul>
      
    </div>
  )
}

export default Projects
