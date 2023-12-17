import React,{useEffect, useState} from 'react';
import './Profile.css';
import Link from './Link';


const Profile = ({data}) => {

    
  return (
    <section className='relative bg-gradient-to-tr bg-yellow-600 mt-4 w-full mx-auto'>
      <h1> About Me </h1>
    <div dir='ltr' className='relative flex flex-row bg-opacity-50 backdrop-filter backdrop-blur-lg items-center'>
        <span className='absolute top-0 left-0'>Name: </span>
        <div className='absolute top-0 right-0  flex flex-row gap-2 '>
          <img className=' w-5 h-5 rounded-full ' src = {data.avatar_url} alt ={data.name}  />
          <span> {data.name} </span>
        </div>
    </div>
    <ul className='mt-5'>
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
