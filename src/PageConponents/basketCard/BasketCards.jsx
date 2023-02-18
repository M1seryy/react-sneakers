import React from "react";
import "./basketCard.scss";
import { ReactComponent as Plus } from "../../images/svg/plus.svg";

const BasketCards = () => {
  return (
    <div className="basket-card-wrap">
      <div className="basket-card-img"></div>
      <div className="details">
        <p className="basket-card-sub-title">
          Мужские Кроссовки Nike Air Max 270
        </p>
        <p className="basket-card-sup-title">12 999 руб.</p>
      </div>
      <div className="card-add-icon">
        <Plus className="plus-btn"></Plus>
      </div>
    </div>
  );
};

export default BasketCards;
