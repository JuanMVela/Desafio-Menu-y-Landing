import React from 'react';
import './NavBar.css';
import CardWidget from '../components/CardWidget';



const NavBar = () => {
  return (
    <nav className=''>
        <div className=''>
           
        </div>        
        <ul className='menu'>            
            <li>
                <a className='' href='#'>Indumentaria</a>
            </li>
            <li>
                <a className='' href='#'>Figuras</a>
            </li>
            <li>
                <a className='' href='#'>Posters</a>
            </li>
            <li>
                <a className='' href='#'>Accesorios</a>
            </li>
            <li>
                <a className='' href='#'><CardWidget/></a>
            </li>
            
        </ul>
    </nav>
  )
}

export default NavBar