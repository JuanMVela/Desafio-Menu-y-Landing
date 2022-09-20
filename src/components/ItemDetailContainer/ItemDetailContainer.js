import React, { useEffect, useState } from 'react'

//import params para id
import { useParams } from "react-router"
import ItemDetail from '../ItemDetail/ItemDetail';

const Detail = () => {
const [detail, usedetail] = useState([])

let {id} = useParams()
console.log(id)

useEffect(()=>{
  
  
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then((response) => response.json())
  .then((response) => usedetail(response))
  .catch((err) => console.error(err));
},[id])
console.log(detail)

  return (
    <div>
      <ItemDetail data={detail} stock={5} />
    </div>
  )
}

export default Detail