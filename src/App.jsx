
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/nav/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/listas/ItemDetailContainer";
import ItemListContainer from "./Components/listas/ItemListContainer";
import Nosotros from "./Components/Screens/Nosotros";
import Contacto from "./Components/Contacto";
import {CartProvider } from "./context/CartContext";
import Carrito from "./Components/Carrito";
import CheckOut from "./Components/CheckOut";


function App() {


  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<CheckOut />} />

          </Routes>
        </BrowserRouter>
        </CartProvider>
     

    </div>
  );
}

export default App;
