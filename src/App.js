import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

//viws
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import PcGame from "./views/PcGame/PcGame"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './views/Cart/Cart';
import CartProvider from './CartContex';





function App() {
    return (
<Router>
  <CartProvider>
<div >
      <NavBar/>
    <div className='flex flex-wrap '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pcgame' element={<PcGame/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
      </Routes>

      </div>
    </div>
    </CartProvider>
</Router>
    

  );
}

export default App;
