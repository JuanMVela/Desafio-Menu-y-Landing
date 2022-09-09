import React, {useState, useEffect} from 'react';
import "./ItemDetailContainer.css"

// COMPONENTES

import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router"

const ItemDetailContainer = () => {
    const[products, setProducts] = useState([]);

  let {id} = useParams()
  console.log(id)
    
    useEffect(() => {


            
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.error(err));

        
    },[id]) 
    console.log(products)


  return (
    <div className='Cards-ContainerDetail'>
      <ItemDetail products= {products}/>
      </div>
  )
}

export default ItemDetailContainer