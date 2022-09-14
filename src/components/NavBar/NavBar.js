import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";


// COMPONENTES
import CardWidget from "../CardWidget/CardWidget"



const NavBar = () => {
  return (
    <nav className=''>
        <div className=''>          
        </div>        
        <ul className='menu'>            
            <Link to="/"className='Link'>Home</Link>
            <Link to="/About"className='Link'>About</Link>
            <Link to="/Contact"className='Link'>Contacto</Link>         
            <Link to="/cart"className='Link'><CardWidget/></Link>           
        </ul>
    </nav>
  )
}

export default NavBar