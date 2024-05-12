import { useState } from "react";
import PriceInformation from "../PriceInformation/PriceInformation";
import style from "./CartItem.module.scss";
import Message from "../Message/Message";

const CartItem = ({ item, handleDelete, handleAdd }) => {
  const [noMore, setNoMore] = useState(false);

  const handleAddWithStockUpdate = () => {
    if (item.quantity + 1 === item.product.stock) {
      setNoMore(true);
      console.log("no moree");
    }
    handleAdd(item.product, item.color);
  };
  const handleDeleteWithStockUpdate = () => {
    console.log(item.quantity, item.product.stock);
    if (item.quantity === item.product.stock) {
      setNoMore(false);
    }
    handleDelete(item.product.docId, item.color);
  };
  return (
    <>
      <div className={style.item}>
        <img
          className={style.thumbnail}
          src={item.product.thumbnail}
          alt={item.product.title}
        />
        <p className={style.title}>{item.product.title}</p>
        <p
          style={{
            color: item.color,
            border: "1px solid lightgrey",
          }}
        >
          &#9632;
        </p>
        <div className={style.qty}>
          <button
            disabled={item.quantity >= item.product.stock}
            onClick={handleAddWithStockUpdate}
          >
            +
          </button>
          <p>{item.quantity}</p>
          <button
            disabled={item.quantity <= 0}
            onClick={handleDeleteWithStockUpdate}
          >
            -
          </button>
        </div>
        <div className={style.price}>
          <PriceInformation
            price={item.product.price}
            discount={item.product.discountPercentage}
          />
        </div>
        <small>x{item.quantity}</small>
        <div className={style.total_price}>
          <PriceInformation
            price={
              Number(item.product.price) *
              Number(item.quantity) *
              ((100 - Number(item.product.discountPercentage)) / 100)
            }
            discount={0}
          />
        </div>
      </div>
      {noMore && <Message message={"No more stock left !"} type="popup" />}
    </>
  );
};

export default CartItem;
