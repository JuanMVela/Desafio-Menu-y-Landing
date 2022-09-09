import React from 'react';
import './App.css';

// REACT ROUTER DOM 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// VIEWS
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";


// COMPONENTES

import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';






function App (){
  
  return(
      
    <Router>
     <div className='App'>      
       <NavBar/>    
        <Routes>
           <Route path= "/" element = {<Home/>}/>    
           <Route path= "/About" element = {<About/>}/>    
           <Route path= "/Contact" element = {<Contact/>}/>
           <Route path= "/Contact" element = {<Contact/>}/>
           <Route path= "/detail/:id" element = {<ItemDetailContainer/>}/>
        </Routes>
     </div>     
     </Router>
  )
}

export default App;