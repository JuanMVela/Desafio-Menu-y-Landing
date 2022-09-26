
import React from 'react'
import Item from '../Item/Item';
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from '../../Firebase/FirebaseConfig';

//Link react-router-dom
import { Link } from "react-router-dom"


const ItemList = ({game}) => {

      return (
<div className='flex flex-wrap justify-center'>
{
  game.map((items, idx)=>{
    return <Link to={`/detail/${items.id}`}><div className="p-6">
      <Item key={idx} data={items}/></div></Link>
}
)
}
</div>
)}
export default ItemList
