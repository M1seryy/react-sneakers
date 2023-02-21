import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_ITEMS } from "../../redux/types/types";
import Basket from "../basket/Basket";
import Card from "../card/Card";
import "./products.scss";

const Products = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const SERVER_DATA = useSelector((state) => state.serverData);
  const DATA_URL = `https://63ef75c5c59531ccf16fa934.mockapi.io/products`;
  const getData = async () => {
    const response = await axios.get(DATA_URL);
    dispatch({ type: SET_ITEMS, payload: response.data });
  };
  const inputValue = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="products">
      <div className="container">
        <div className="product-content">
          <h2 className="products-title">Все кроссовки</h2>
          <input
            type="text"
            onChange={inputValue}
            value={searchValue}
            className="search-input"
            placeholder="Seach..."
          />
          <div className="shoes-list">
            {SERVER_DATA.filter((item) =>
              item.name.toLowerCase().includes(searchValue)
            ).map((item, index) => {
              return <Card key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
