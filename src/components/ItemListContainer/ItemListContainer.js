import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css"

// COMPONENTES
import Title from '../Title/Title';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () => {


  const[games, setGames] = useState([]);
  const[loading, setLoading] = useState(true);

    
    useEffect(() => {

      setTimeout (() => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5f046da89amsh280e0123a3abaf0p11c90bjsn91205c5e87a8',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(data => {setGames(data); setLoading(false);})
        .catch(err => console.error(err));
    },2000)
    
        
  
    },[]) 
  
  return (
    <div>
      <Title greeting="Ema"/>
     <div className='Cards-Container'>
      < ItemList games= {games} loading= {loading}/>
      </div>
      
    </div>    
      
  )
}

export default ItemListContainer;