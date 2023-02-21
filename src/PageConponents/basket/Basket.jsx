import React, { useEffect, useRef, useState } from "react";
import "../basket/basket.scss";
import BasketCards from "../basketCard/BasketCards";
import { ReactComponent as Plus } from "../../images/svg/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SET_BASKET } from "../../redux/actions/actions";
import { SET_CARD_ITEMS } from "../../redux/types/types";

const Basket = ({ close, setClose, onDelete }) => {
  const dispatch = useDispatch();
  const addedArr = useSelector((state) => state.cardItems);
  const closeHandler = () => {
    setClose(!close);
  };
  const getBasket = async () => {
    const response = await axios.get(
      `https://63ef75c5c59531ccf16fa934.mockapi.io/basket`
    );
    dispatch(SET_BASKET(SET_CARD_ITEMS, response.data));
  };
  useEffect(() => {
    getBasket();
  }, []);

  return (
    <div className={close ? "overlay" : "overlay hidden"}>
      <div className="basket-wrap">
        <Plus onClick={closeHandler} className="exit-btn"></Plus>
        <h2 className="basket-title">Orders</h2>
        <div className="cards">
          {addedArr.map((item, index) => {
            return (
              <BasketCards onDeleteFunc={onDelete} key={index} data={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Basket;
