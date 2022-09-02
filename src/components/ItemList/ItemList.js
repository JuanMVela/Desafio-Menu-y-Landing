import React, {useState, useEffect} from 'react';


// COMPONENTES
import Item from '../Item/Item';


const ItemList = () => {

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
    
  

    const array = games.splice(0,6);
    return(
    <div>{loading}
      
    {array.map((games) => {
      return <Item
       key={games.id}
       data={games.title}
       img={games.thumbnail}
       description={games.short_description}
       plataform={games.platform}/>;
      })}
      </div>)
  
    
  
}

export default ItemList




// const ItemList = () => {

//   const[games, setGames] = useState([]);

    
//     useEffect(() =>{
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': '5f046da89amsh280e0123a3abaf0p11c90bjsn91205c5e87a8',
//           'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//       };
      
//       fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
//         .then(response => response.json())
//         .then(data => setGames(data))   
//         .catch(err => console.error(err));
    
        
  
//     },[]) 
    
  

//     const array = games.splice(0,6);
//     return(
//     <div>
//     {array.map((games) => {
//       return <Item
//        key={games.id}
//        data={games.title}
//        img={games.thumbnail}
//        description={games.short_description}
//        plataform={games.platform}/>;
//       })}
//       </div>)
  
    
  
// }