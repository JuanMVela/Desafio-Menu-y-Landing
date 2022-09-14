import React from 'react'
import logo from '../Header/ico2.png'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <p>Valorant</p>
        <img src={logo} alt= "Logo" width="40px"/>
    </div>
  )
}

export default Header