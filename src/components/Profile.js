import React,{useEffect, useState} from 'react';
import './Profile.css';


const Profile = ({data}) => {

    
  return (
    <section className='Profile-container'>
    <h1> About Me </h1>
    <h2> {data.name} </h2>
    <img src = {data.avatar_url} alt ={data.name} className='Profile-avatar' />
    <ul>
      <li> </li>
    </ul>
    {
      data.location && <p> <i>Location: {data.location} </i> </p>

      }
       {
        /* add repo and readme components   */ 
       }

    
      
    </section>
  )
}

export default Profile
