import React,{useEffect, useState} from 'react'

const Profile = (ProfileData) => {

    
  return (
    <section>
    <h1> About Me </h1>
    <h2> {ProfileData.name} </h2>
    <img src = {ProfileData.avatar_url} alt ={ProfileData.name} />
    <p> <i>Location: {ProfileData.location} </i> </p>

    
      
    </section>
  )
}

export default Profile
