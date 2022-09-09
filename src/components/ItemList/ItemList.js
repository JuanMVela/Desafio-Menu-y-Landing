import React from 'react';

// COMPONENTES
import Item from '../Item/Item';
import { Link } from "react-router-dom"

const ItemList = ({products, loading}) => {
  
  return(
  <div>
    {loading}
    
  {products.map((product) => {
    return(<div key={product.id}><Link to={`/detail/${product.id}`} ><Item data={product}/></Link></div>
    )})}
    </div>)
      
}

export default ItemList


