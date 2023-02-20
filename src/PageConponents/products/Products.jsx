import axios from "axios";
import React, { useEffect, useState } from "react";
import Basket from "../basket/Basket";
import Card from "../card/Card";
import "./products.scss";

const Products = () => {
  const [data, setData] = useState([]);
  const DATA_URL = `https://63ef75c5c59531ccf16fa934.mockapi.io/products`;
  const getData = async () => {
    const response = await axios.get(DATA_URL);

    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="products">
      <div className="container">
        <div className="product-content">
          <h2 className="products-title">Все кроссовки</h2>
          <div className="shoes-list">
            {data.map((item, index) => {
              return <Card key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
