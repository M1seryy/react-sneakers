import React, { useRef, useState } from "react";
import "../basket/basket.scss";
import BasketCards from "../basketCard/BasketCards";
import { ReactComponent as Plus } from "../../images/svg/plus.svg";
import { useDispatch, useSelector } from "react-redux";

const Basket = ({ close, setClose }) => {
  const dispatch = useDispatch();
  const addedArr = useSelector((state) => state.basketArr);
  const closeHandler = () => {
    setClose(!close);
  };

  return (
    <div className={close ? "overlay" : "overlay hidden"}>
      <div className="basket-wrap">
        <Plus onClick={closeHandler} className="exit-btn"></Plus>
        <h2 className="basket-title">Orders</h2>
        <div className="cards">
          {addedArr.map((item, index) => {
            return <BasketCards key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Basket;
