import React from 'react'
import logo from "../Assets/images/ico2.png"
import darkMode from "../Assets/icons/dark-mode.png"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-700 p-6">
  <div>
    <Link to="/"><img src={logo} alt="logo"/></Link>
  </div>
  <div className="block lg:hidden">
    <button id='boton' className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black hover:bg-indigo-400 transition ease-in duration-500">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div id='menu' className="w-full lg:text-right text-left block flex-grow lg:flex lg:items-center lg:w-auto mr-0">
    <div className="text-sm lg:flex-grow">
    <Link to="/" href="#responsive-header" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-4">
        Inicio
      </Link>
      <Link to="/contact" href="#responsive-header" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-4">
        Contacto
      </Link>
      <Link to="/pcgame" href="#responsive-header" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-white mr-4">
        Componentes de PC
      </Link>

      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-stone-900 hover:text-black mr-4">
      <img className='h-4 w-10' src={darkMode} alt="darkmode"/>
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-black">
        <Link to={"/cart"}><CartWidget/></Link>
      </a>
    </div>
    <div>
      <a href="#/" className="lg:ml-16 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-black hover:bg-indigo-400 hover:border-black mt-4 lg:mt-0 transition ease-in duration-500">Login</a>
    </div>
  </div>
</nav>

    
  )
}

export default NavBar