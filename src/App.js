import React from 'react';
import './App.css';

// COMPONENTES
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App (){
  return(  
      
    <div className='App'>
      <NavBar/>
      <ItemListContainer/>     
    </div>
    
  )
}

export default App;