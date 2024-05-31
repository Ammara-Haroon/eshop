import { createContext, useState } from "react";
import { getNumberOfCartItems } from "../services/cart-data-services";

export const CartCountContext = createContext(null);

const CartCountContextProvider = ({ children }) => {
  const [itemsCount, setItemsCount] = useState(getNumberOfCartItems());
  const updateItemsCount = () => {
    setItemsCount(getNumberOfCartItems());
  };
  return (
    <CartCountContext.Provider value={{ itemsCount, updateItemsCount }}>
      {children}
    </CartCountContext.Provider>
  );
};
export default CartCountContextProvider;
