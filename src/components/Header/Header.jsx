import React, { useContext, useEffect, useState } from "react";
import style from "./Header.module.scss";
import MobileNav from "../MobileNav/MobileNav";
import { Link } from "react-router-dom";
import {
  getCountOfFavouriteProducts,
  getTotalCountOfProducts,
} from "../../services/products-service";
import { getNumberOfCartItems } from "../../services/cart-data-services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    setCartCount(getNumberOfCartItems());
    getCountOfFavouriteProducts().then(setFavCount);

    const handleCartChange = () => {
      setCartCount(getNumberOfCartItems());
      getCountOfFavouriteProducts().then(setFavCount);
    };
    const handleFavouriteChange = () => {
      setCartCount(getNumberOfCartItems());
      getCountOfFavouriteProducts().then(setFavCount);
    };
    window.addEventListener("mousedown", handleFavouriteChange);
    window.addEventListener("click", handleCartChange);
    return () => {
      window.removeEventListener("mousedown", handleFavouriteChange);
      window.removeEventListener("click", handleCartChange);
    };
  }, []);
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
            <small>{favCount}</small>
          </div>
        </Link>
        <Link to="/eshop/cart">
          <div className={style.icon_wrapper}>
            <FontAwesomeIcon
              className={style.icon}
              icon={faShoppingBag}
              siz="lg"
            />
            <small>{cartCount}</small>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
