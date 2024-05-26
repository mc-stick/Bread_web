import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ Item }) => {
  const { carrito, Agregar } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const Restar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const Sumar = () => {
    cantidad < Item.stock && setCantidad(cantidad + 1);
  };

 

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={Item.imagen} alt={Item.titulo} />
        <div>
          <h3 className="titulo">{Item.titulo}</h3>
          <p className="descripcion">{Item.descripcion}</p>
          <p className="categoria"> categoria:{Item.categoria}</p>
          <p className="precio">$ {Item.precio}</p>
          <ItemCount
            Sumar={Sumar}
            Restar={Restar}
            Cantidad={cantidad}
            Add={()=>{Agregar(Item,cantidad)}}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
