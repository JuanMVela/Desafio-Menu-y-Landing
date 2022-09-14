import React from 'react';
import './App.css';

// REACT ROUTER DOM 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// VIEWS
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";



// COMPONENTES
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './views/Cart';


function App (){
  
  return(
      
    <Router>
     <div className='App'>
      <Header/>
       <NavBar/>    
        <Routes>
           <Route path= "/" element = {<Home/>}/>
           <Route path= "/cart" element = {<Cart/>}/>    
           <Route path= "/About" element = {<About/>}/>    
           <Route path= "/Contact" element = {<Contact/>}/>
           <Route path= "/Detail/:id" element = {<ItemDetailContainer/>}/>
        </Routes>    
     </div>     
     </Router>
  )
}

export default App;
