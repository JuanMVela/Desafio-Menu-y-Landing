import React, {useState, useEffect} from 'react';
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom';


// COMPONENTES

import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

  const[art, setArticle] = useState([]);

  let { id } = useParams();


  useEffect(() => {
                 
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(err => console.error(err));   
      
  },[id]);

  console.log(art)

  return(
    <div><ItemDetail data={art}/></div>
  )
} 

export default ItemDetailContainer;

