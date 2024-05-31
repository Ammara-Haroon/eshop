import React, { useContext, useState } from "react";
import style from "./ProductCard.module.scss";
import { updateFavouriteProducts } from "../../services/products-service";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../services/cart-data-services";
import LikeButton from "../LikeButton/LikeButton";
import PriceInformation from "../PriceInformation/PriceInformation";
import Message from "../Message/Message";
import { FavouriteProductsContext } from "../../contexts/FavouriteProductsContext";
import { CartCountContext } from "../../contexts/CartCountContext";
const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(product.favourite);
  const [addedToCart, setAddedToCart] = useState(false);
  const [noMore, setNoMore] = useState(false);
  const navigate = useNavigate(null);
  const { updateFav } = useContext(FavouriteProductsContext);
  const { updateItemsCount } = useContext(CartCountContext);

  const handleLike = () => {
    updateFav(product, !isLiked);
    setIsLiked(!isLiked);
  };

  //load the product page based on product id
  const loadProductPage = () => {
    navigate("/eshop/products/" + product.docId);
  };

  const handleClick = () => {
    try {
      addToCart(product);
      updateItemsCount();
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    } catch (err) {
      setNoMore(true);
      setTimeout(() => setNoMore(false), 2000);
    }
  };
  return (
    <>
      <div className={style.card}>
        <img
          onClick={loadProductPage}
          src={product.thumbnail}
          alt={product.title}
        />

        {product.stock !== 0 && (
          <LikeButton
            className={style.icon}
            setLikedStatus={handleLike}
            isLiked={isLiked}
          />
        )}

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
