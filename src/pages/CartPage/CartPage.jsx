import CartItem from "../../components/CartItem/CartItem";
import {
  deleteFromCart,
  getCart,
  getCartTotal,
  addToCart,
} from "../../services/cart-data-services";
import style from "./CartPage.module.scss";
import React, { useState } from "react";
import Message from "../../components/Message/Message";
import PriceInformation from "../../components/PriceInformation/PriceInformation";

const CartPage = () => {
  const [cart, setCart] = useState(getCart());
  const deleteCartItem = (id, color) => {
    deleteFromCart(id, color);
    setCart(getCart());
    //console.log("new cart", getCart());
  };
  const addCartItem = (product, color) => {
    addToCart(product, color);
    setCart(getCart());

    //console.log("new cart", getCart());
  };
  return (
    <div className={style.page}>
      <h3>My Cart</h3>
      {(!cart || cart.length === 0) && <Message message={"Cart is Empty"} />}
      <div>
        {cart &&
          cart.map((product, index) => (
            <CartItem
              key={index}
              item={product}
              handleDelete={deleteCartItem}
              handleAdd={addCartItem}
            />
          ))}
      </div>
      {cart.length !== 0 && (
        <div className={style.total}>
          <p>Grand Total:</p>
          <PriceInformation price={getCartTotal()} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
