import React from "react";
import "./basketCard.scss";
import { ReactComponent as Plus } from "../../images/svg/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { DELETE } from "../../redux/types/types";
import { DELETE_ITEM } from "../../redux/actions/actions";

const BasketCards = ({ data, onDeleteFunc }) => {
  const dispatch = useDispatch();
  const reduxArr = useSelector((state) => state.basketArr);
  // const deleteHandler = (id) => {
  //   const newArr = reduxArr.filter((obj) => obj.id !== id);
  //   console.log(newArr, id);
  //   dispatch(DELETE_ITEM(DELETE, newArr));
  //   // dispatch({ type: DELETE, payload: newArr });
  // };
  return (
    <div className="basket-card-wrap">
      <img src={data.imageURL} alt="shoe" className="basket-card-img"></img>
      <div className="details">
        <p className="basket-card-sub-title">{data.name}</p>
        <p className="basket-card-sup-title">{data.price}$</p>
      </div>
      {/* () => deleteHandler(data.id) */}
      <div
        onClick={() => {
          onDeleteFunc(data.id);
        }}
        className="card-add-icon"
      >
        <Plus className="plus-btn"></Plus>
      </div>
    </div>
  );
};

export default BasketCards;
