import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => console.log(data))



// const items = [
//   {name: "bici", precio: 500},
//   {name: "moto", precio: 800}
// ];

// const itemsNames = items.map((item) =>{
  
//   return `Nombre: ${item.name} - Precio:${item.precio}`;
// })

// console.log(itemsNames)


