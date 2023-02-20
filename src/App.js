import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Basket from "./PageConponents/basket/Basket";
import Header from "./PageConponents/header/Header";
import Hero from "./PageConponents/hero/Hero";
import Products from "./PageConponents/products/Products";

function App() {
  const [close, setClose] = useState(false);

  return (
    <>
      <Basket close={close} setClose={setClose} />
      <Header close={close} setClose={setClose} />
      <Hero />
      <Products />
    </>
  );
}

export default App;
