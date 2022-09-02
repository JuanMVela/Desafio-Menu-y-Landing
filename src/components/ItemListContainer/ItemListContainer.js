import React from 'react';
import "./ItemListContainer.css"

// COMPONENTES
import Title from '../Title/Title';
import ItemList from '../ItemList/ItemList';




const ItemListContainer = () => {
  return (
    <div>
      <Title greeting="Ema"/>
     <div className='Cards-Container'>
      < ItemList />
      </div>
      
    </div>
    
    
    
    
   
    
    
  )
}

export default ItemListContainer;