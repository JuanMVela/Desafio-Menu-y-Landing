import React from "react";
import Item from "../Item/Item";

//Link react-router-dom
import { Link } from "react-router-dom";
// import Prueba from "../Prueba/Prueba";

const ItemList = ({ game }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {game.map((items, id) => {
        return (
          <Link to={`/detail/${items.id}`}>
            <div className="p-6">
              <Item key={id} data={items} />
              {/* <Prueba key={id} pr={items} /> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ItemList;
