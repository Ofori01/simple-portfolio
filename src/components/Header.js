import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';


const Header = ({logo}) => {
  return (
    <header className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
      <h1> My Portfolio </h1>
      <nav>
        <Link to='/' > About </Link>
        <Link to='repos'>Projects </Link>
      </nav>
  
    </header>
  )
}

export default Header
