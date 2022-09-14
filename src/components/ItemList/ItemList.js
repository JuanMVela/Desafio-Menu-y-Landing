import React from 'react';
import { Link } from 'react-router-dom';


// COMPONENTES
import Item from '../Item/Item';
import './ItemList.css'


const ItemList = ({products, loading}) => {


  
  return(
  <div className='CardsCn'>
     {loading}    
  {products.map((prod) => {return <Link to={`/Detail/${prod.id}`} className='DetalleLink'>
<Item key={prod.id} data={prod}/>
            </Link> ; })}
    </div>
    )      
}

export default ItemList


