import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css"

// COMPONENTES
import Title from '../Title/Title';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {


  const[products, setProducts] = useState([]);
  const[loading, setLoading] = useState(true);

    
    useEffect(() => {
              
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {setProducts(data); setLoading(false);})
        .catch(err => console.error(err));
    
    
        
  
    },[]) 
  
  return (
    <div>
      <Title greeting="Ema"/>
     <div className='Cards-Container'>
      < ItemList products= {products} loading= {loading}/>
      </div>
      
    </div>    
      
  )
}

export default ItemListContainer;