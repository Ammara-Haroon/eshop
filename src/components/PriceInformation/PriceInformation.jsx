import {
  getFormattedPrice,
  getPriceAfterDiscount,
} from "../../services/util-services";
import style from "./PriceInformation.module.scss";
import React from "react";

const PriceInformation = ({ price, discount = 0 }) => {
  const priceStyleClasses = `${style.price} ${
    discount ? style.discounted : ""
  }`;
  return (
    <p>
      <span className={priceStyleClasses}>{getFormattedPrice(price)}</span>
      {discount !== 0 && (
        <span className={style.discount}>
          {getPriceAfterDiscount(price, discount)}
        </span>
      )}
    </p>
  );
};

export default PriceInformation;
