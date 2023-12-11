import React,{useEffect, useState} from 'react';
import './Profile.css';
import Link from './Link';


const Profile = ({data}) => {

    
  return (
    <section className='Profile-container'>
    <h1> About Me </h1>
    <h2> {data.name} </h2>
    <img src = {data.avatar_url} alt ={data.name} className='Profile-avatar' />
    <ul>
    {
      data.location && (<li> <i>Location: {data.location} </i> </li>)
    }
     {
     data.repos_url  && <li> <Link url={data.repos_url} title='repos_url' /> </li>
      
     } 
    
    </ul>



      
       {
        /* add repo and readme components   */ 
       }

    
      
    </section>
  )
}

export default Profile
