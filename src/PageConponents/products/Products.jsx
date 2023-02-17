import React from "react";
import Card from "../card/Card";
import "./products.scss";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="product-content">
          <h2 className="products-title">Все кроссовки</h2>
          <div className="shoes-list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
