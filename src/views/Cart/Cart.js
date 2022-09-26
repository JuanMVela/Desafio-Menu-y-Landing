import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContex";
import ItemCart from "../../components/ItemCart/ItemCart";


const Cart = () => {
  const { cart, clearCart  } = useCartContext();
  console.log(cart);

  const price = cart.map((product) =>{
    return product.price * product.quantity
  })
  console.log(price)

  const totalPrice = price.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return (
    <div className="m-auto p-14">
      <h1 className="text-center font-semibold text-3xl">Tus Productos en carrito:</h1>
      {cart.map(product => <ItemCart key={product.id} product={product}/>)}
{cart.length ?  <div> <button
    className="py-2 px-4 mb-10 mx-auto mt-5 shadow-lg shadow-slate-500/50 bg-slate-800 text-white rounded hover:bg-slate-700 active:bg-slate-700 disabled:opacity-50  flex items-center justify-center"
    onClick={() => clearCart()}
  >
    Eliminar Carrito
  </button>
  <h3 className="text-center font-semibold text-lg">Precio total: {`${totalPrice}`}</h3> </div> : (
          <div>
            <p className="text-center mt-24 text-2xl">
              No tienes productos en tu carrito aún...
            </p>
            <Link to={`/`}>
              <button className="py-2 px-4 mt-8 mx-auto shadow-lg shadow-slate-500/50 bg-slate-800 text-white rounded hover:bg-slate-700 active:bg-slate-700 disabled:opacity-50  flex items-center justify-center">
                Agregar Productos
              </button>
            </Link>
          </div>
        )} 
    </div>
  );
};

export default Cart;