import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./PageConponents/header/Header";
import Hero from "./PageConponents/hero/Hero";
import Products from "./PageConponents/products/Products";

function App() {
  const [data, setData] = useState([]);
  const DATA_URL = `https://63ef75c5c59531ccf16fa934.mockapi.io/products`;
  const getData = async () => {
    const response = await axios.get(DATA_URL);

    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  data.map((item) => {
    console.log(item);
  });
  return (
    <>
      <Header />
      <Hero />
      <Products />
    </>
  );
}

export default App;
