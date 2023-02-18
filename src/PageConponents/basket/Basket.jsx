import React, { useRef, useState } from "react";
import "../basket/basket.scss";
import BasketCards from "../basketCard/BasketCards";
import { ReactComponent as Plus } from "../../images/svg/plus.svg";

const Basket = ({close,setClose}) => {
  const closeHandler = () => {
    setClose(!close);
  };
  return (
    <div className={close ? "overlay" : "overlay hidden"}>
      <div className="basket-wrap">
        <Plus onClick={closeHandler} className="exit-btn"></Plus>
        <h2 className="basket-title">Orders</h2>
        <div className="cards">
          <BasketCards />
          <BasketCards />
        </div>
      </div>
    </div>
  );
};

export default Basket;
