import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"


import { db } from '../../Firebase/FirebaseConfig';
import { collection, query, getDocs, where } from "firebase/firestore";

import ItemDetail from '../../components/ItemDetail/ItemDetail';

const Category = () => {

const [detail, setDetail] = useState([]);

const { category } = useParams();

useEffect(()=>{

  const getDetail = async() =>{

    const q = query(collection(db, "game"), where("category", "==", category));

    const docs = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    
    docs.push({...doc.data(), id: doc.id})
    }); 

    setDetail(docs);

  }; 

    getDetail();

  }, [category]);
  

  return (
    detail.map((data)=>{
    return   <ItemDetail data={data} stock={5} />}
   
  ))
}

export default Category;