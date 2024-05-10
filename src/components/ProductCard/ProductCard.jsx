import React, { useState } from "react";
import style from "./ProductCard.module.scss";
import { updateFavouriteProducts } from "../../services/products-service";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cart-data-services";
import LikeButton from "../LikeButton/LikeButton";
import PriceInformation from "../PriceInformation/PriceInformation";
import Message from "../Message/Message";
const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(product.favourite);
  const [addedToCart, setAddedToCart] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const handleLike = () => {
    updateFavouriteProducts(product.docId, !isLiked);
    setIsLiked(!isLiked);
  };
  const navigate = useNavigate(null);
  const loadProductPage = () => {
    console.log("display page of ", product);
    navigate("/eshop/products/" + product.docId);
  };
  const handleClick = () => {
    try {
      addToCart(product);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 1000);
    } catch (err) {
      setNoMore(true);
      setTimeout(() => setNoMore(false), 1000);
    }
  };
  return (
    <>
      <div className={style.card}>
        <img
          onClick={loadProductPage}
          src={product.thumbnail}
          alt="Denim Jeans"
        />

        <LikeButton
          className={style.icon}
          setLikedStatus={handleLike}
          isLiked={isLiked}
        />

        <h2>
          {product.title} (<small>{product.category}</small>)
        </h2>
        <PriceInformation
          price={product.price}
          discount={product.discountPercentage}
        />

        <button disabled={product.stock === 0} onClick={handleClick}>
          Add to bag
        </button>

        {!product.stock && (
          <div className={style.overlay}>
            <p>Sold Out</p>
          </div>
        )}
        {product.discountPercentage > 50 && (
          <div className={style.badge}>
            <p>{product.discountPercentage}% off</p>
          </div>
        )}
      </div>
      {addedToCart && <Message message="Added to Cart !" type="popup" />}
      {noMore && <Message message="No more stock left !" type="popup" />}
    </>
  );
};

export default ProductCard;
