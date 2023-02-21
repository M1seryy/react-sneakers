import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Basket from "./PageConponents/basket/Basket";
import Header from "./PageConponents/header/Header";
import Hero from "./PageConponents/hero/Hero";
import Products from "./PageConponents/products/Products";
import { DELETE_ITEM } from "./redux/actions/actions";
import { DELETE } from "./redux/types/types";

function App() {
  const cardItemsArr = useSelector((state) => state.cardItems);
  const [close, setClose] = useState(false);
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    let filteredCardArr = cardItemsArr.filter((item) => item.id !== id);
    console.log(filteredCardArr);
    await axios.delete(
      `https://63ef75c5c59531ccf16fa934.mockapi.io/basket/${id}`
    );
    dispatch(DELETE_ITEM(DELETE, filteredCardArr));
  };
  return (
    <>
      <Basket close={close} onDelete={deleteHandler} setClose={setClose} />
      <Header close={close} setClose={setClose} />
      <Hero />
      <Products />
    </>
  );
}

export default App;
