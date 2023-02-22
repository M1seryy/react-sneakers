import React, { useState } from "react";
import "./card.scss";
import shoe from "../../images/img/shoes.png";
import { ReactComponent as ShoeLike } from "../../images/svg/shoe-like.svg";
import { ReactComponent as Plus } from "../../images/svg/plus.svg";
import { ReactComponent as Added } from "../../images/svg/added.svg";
import { useDispatch, useSelector } from "react-redux";
import { ADD, SET_ITEMS } from "../../redux/types/types";
import { SET_TO_BASKET } from "../../redux/actions/actions";
import axios from "axios";

const Card = ({ data }) => {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.basketArr);
  const setDataToBasket = () => {
    axios.post(`https://63ef75c5c59531ccf16fa934.mockapi.io/basket`, data);
    dispatch(SET_TO_BASKET(ADD, data));
  };
  const addBtn = () => {
    setAdded(!added);
  };
  const multipleFunc = () => {
    return addBtn(), setDataToBasket();
  };
  return (
    <div className="card-wrap">
      <div className="card-like-icon">
        <ShoeLike className="like-btn"></ShoeLike>
      </div>
      <img className="card-img" src={data.imageURL} alt="sneakers" />
      <p className="card-sub-title">{data.name}</p>
      <p className="card-sup-title">{data.price}$</p>
      {added ? (
        <div onClick={addBtn} className="card-add-icon-added">
          <Added className="added-icon"></Added>
        </div>
      ) : (
        <div onClick={multipleFunc} className="card-add-icon">
          <Plus className="plus-btn"></Plus>
        </div>
      )}
    </div>
  );
};

export default Card;
