import React from 'react';
import './App.css';

// COMPONENTES
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App (){
  
  return(
      
      
    <div className='App'>
      <NavBar/>
      <ItemListContainer/>
      <h1>Desafio - Item Detail</h1>
      <ItemDetailContainer/>
    
    </div>
    
  )
}

export default App;