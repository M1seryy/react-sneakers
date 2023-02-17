import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./PageConponents/header/Header";
import Hero from "./PageConponents/hero/Hero";
import Products from "./PageConponents/products/Products";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
    </>
  );
}

export default App;
