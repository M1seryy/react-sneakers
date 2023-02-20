import React from "react";
import "./basketCard.scss";
import { ReactComponent as Plus } from "../../images/svg/plus.svg";
import { useDispatch, useSelector } from "react-redux";

const BasketCards = ({ data }) => {
  const dispatch = useDispatch();
  const reduxArr = useSelector((state) => state.basketArr);
  const deleteHandler = (id) => {
    const newArr = reduxArr.filter((obj) => obj.id !== id);
    console.log(newArr, id);
    dispatch({ type: "CHANGE", payload: newArr });
  };
  return (
    <div className="basket-card-wrap">
      <img src={data.imageURL} alt="shoe" className="basket-card-img"></img>
      <div className="details">
        <p className="basket-card-sub-title">{data.name}</p>
        <p className="basket-card-sup-title">{data.price}$</p>
      </div>
      <div className="card-add-icon">
        <Plus
          onClick={() => deleteHandler(data.id)}
          className="plus-btn"
        ></Plus>
      </div>
    </div>
  );
};

export default BasketCards;
