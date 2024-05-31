import React, { useEffect, useState, useContext } from "react";
import style from "./ProductPage.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import ColoredRadioButtons from "../../components/ColoredRadioButtons/ColoredRadioButtons";
import PriceInformation from "../../components/PriceInformation/PriceInformation";
import LikeButton from "../../components/LikeButton/LikeButton";
import { addToCart } from "../../services/cart-data-services";
import Message from "../../components/Message/Message";
import { FavouriteProductsContext } from "../../contexts/FavouriteProductsContext";
import { useNavigate } from "react-router-dom";
import { CartCountContext } from "../../contexts/CartCountContext";

const ProductPage = ({ product }) => {
  const [isLiked, setIsLiked] = useState(product.favourite);
  const colors = product.color;
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("black");
  const [noMore, setNoMore] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { updateFav } = useContext(FavouriteProductsContext);
  const navigate = useNavigate(null);
  const { updateItemsCount } = useContext(CartCountContext);

  useEffect(() => {
    setAddedToCart(false);
  }, []);
  const handleQtyChange = (e) => {
    if (Number(e.target.value) === product.stock) {
      setNoMore(true);
    }
    if (noMore && Number(e.target.value) === product.stock - 1) {
      setNoMore(false);
    }
    if (Number(e.target.value) > 0 && Number(e.target.value) <= product.stock) {
      setQty(e.target.value);
    }
  };

  const handleLike = () => {
    updateFav(product, !isLiked);
    setIsLiked(!isLiked);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      addToCart(product, color, Number(qty));
      updateItemsCount();
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 6000);
    } catch (err) {
      setNoMore(true);
      e.preventDefault();
      setTimeout(() => setNoMore(false), 7000);
    }
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className={style.wrapper}>
      {
        <Carousel
          products={product.images.map((img) => ({ thumbnail: img }))}
          isAutoSliding={false}
          showThumbnails={true}
        />
      }
      <div className={style.information}>
        <div className={style.header}>
          <h2>{product.title}</h2>
          <LikeButton
            className={style.icon}
            setLikedStatus={handleLike}
            isLiked={isLiked}
          />
        </div>
        <PriceInformation
          price={product.price}
          discount={product.discountPercentage}
        />
        <p>{product.description}</p>
        <form onSubmit={handleSubmit}>
          <div className={style.container}>
            <div>
              <label htmlFor="quantity">Quantity: </label>
              <input
                onChange={handleQtyChange}
                step="1"
                type="number"
                id="quantity"
                min="1"
                name="quantity"
                pattern="[0-9]*"
                inputMode="numeric"
                value={qty}
              />
              <ColoredRadioButtons
                onChange={handleColorChange}
                colors={colors}
                label="Available in:"
                defaultColor={color}
              />
            </div>
          </div>
          <button className={style.cart_button} disabled={product.stock === 0}>
            ADD TO BAG
          </button>
        </form>
        <p>
          <label>SKU: </label>
          {product.sku}
        </p>
        <p>
          <label>Brand: </label>
          {product.brand}
        </p>
        <p>
          <label>Category: </label>
          {product.category}
        </p>
        <p>
          <label>Discount: </label>
          {product.discountPercentage}
        </p>
        <p>
          <label>Rating: </label>
          {product.rating}
        </p>
        <p>
          <label>Qty: </label>
          {product.stock}
        </p>
      </div>
      {noMore && <Message message="No more stock left !" type="popup" />}
      {addedToCart && <Message message="Added to Cart !" type="popup" />}
    </div>
  );
};

export default ProductPage;
