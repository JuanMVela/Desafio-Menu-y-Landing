import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";
import logo from "../../img/logo.png"

// COMPONENTES
import CardWidget from "../CardWidget/CardWidget"



const NavBar = () => {
  return (
    <nav className=''>              
        <ul className='menu'>
        <Link to="/"><img src={logo} alt="logo"/></Link>            
            <Link to="/"className='Link'>Home</Link>
            <Link to="/About"className='Link'>About</Link>
            <Link to="/Contact"className='Link'>Contacto</Link>         
            <Link to="/"className='Link'><CardWidget/></Link>           
        </ul>
    </nav>
  )
}

export default NavBar