import React, { useContext, useEffect, useState } from "react";
import style from "./Header.module.scss";
import MobileNav from "../MobileNav/MobileNav";
import { Link } from "react-router-dom";
import { getNumberOfCartItems } from "../../services/cart-data-services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FavouriteProductsContext } from "../../contexts/FavouriteProductsContext";
import { CartCountContext } from "../../contexts/CartCountContext";
const Header = () => {
  const { getFavCount } = useContext(FavouriteProductsContext);
  const { itemsCount } = useContext(CartCountContext);
  return (
    <div className={style.header}>
      <MobileNav />
      <Link className={style.link} to="/eshop">
        <h1>
          <span>VRB</span>ags
        </h1>
      </Link>
      <div className={style.icon_container}>
        <Link to="/eshop/wishlist">
          <div className={style.icon_wrapper}>
            <FontAwesomeIcon className={style.icon} icon={faHeart} siz="lg" />
            <small>{getFavCount()}</small>
          </div>
        </Link>
        <Link to="/eshop/cart">
          <div className={style.icon_wrapper}>
            <FontAwesomeIcon
              className={style.icon}
              icon={faShoppingBag}
              siz="lg"
            />
            <small>{itemsCount}</small>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
