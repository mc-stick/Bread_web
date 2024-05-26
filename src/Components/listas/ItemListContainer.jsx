import React, { useState, useEffect } from "react";

import { PedirData } from "../../helpers/PedirData";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Todos los Productos");
  const categoria = useParams().categoria;

  console.log(categoria);

  useEffect(() => {
    // PedirData().then((res) => {
    //   if(categoria){
    //     setProductos(res.filter((prod)=> prod.categoria === categoria));
    //     setTitulo(categoria)
    //   }else{
    //     setProductos(res);
    //     setTitulo('Todos los Productos')
    //   }

    // });

    const prodRef = collection(db, "producto");

    const q= categoria ? query(prodRef, where('categoria', '==',categoria)) : prodRef;

    getDocs(q).then((resp) =>
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      )
    );
  }, [categoria]);

  return (
    <div>
      <ItemList producto={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
