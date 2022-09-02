import React from 'react';
import './App.css';

// COMPONENTES
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';



function App (){
  
  return(
      
      
    <div className='App'>
      <NavBar/>
      <ItemListContainer/>
    
    </div>
    
  )
}

export default App;