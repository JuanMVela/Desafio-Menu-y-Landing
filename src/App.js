import React from 'react';
import './App.css';

// COMPONENTES
import ItemListContainer from './components/ItemListContainer';
import NavBar from './NavBar/NavBar';
import ItemCounts from './components/ItemCounts/ItemCounts';



function App (){
  
  return(
      
      
    <div className='App'>
      <NavBar/>
      <ItemListContainer/>
      <ItemCounts/>
      
      
     
    </div>
    
  )
}

export default App;