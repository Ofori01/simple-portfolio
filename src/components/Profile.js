import React,{useEffect, useState} from 'react';
import './Profile.css';
import Link from './Link';


const Profile = ({data}) => {

    
  return (
    <section className='relative bg-gradient-to-tr bg-yellow-600 mt-4 w-full mx-auto'>
      <h1> About Me </h1>
    <div dir='ltr' className='flex flex-row bg-opacity-50 backdrop-filter backdrop-blur-lg items-baseline'>
      <h2 className=' relative inset-0 self-start'> {data.name} </h2>
      <img className=' absolute -top-10 -right-5 self-end rounded-full w-10 h-10' src = {data.avatar_url} alt ={data.name}  />
    </div>
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
