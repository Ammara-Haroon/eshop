import { getFavouriteProducts } from "../../services/products-service";
import style from "./WishListPage.module.scss";
import React, { useEffect, useState } from "react";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const WishListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setErrMsg(null);
    setIsLoading(true);
    getFavouriteProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((e) => {
        setErrMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={style.page}>
      {errMsg && <ErrorMessage errMsg={errMsg} />}
      {isLoading && <LoadingSpinner />}
      {!errMsg && !isLoading && (
        <ProductsGrid
          products={products}
          heading="My Wish List"
          needsPaging={false}
        />
      )}
    </div>
  );
};

export default WishListPage;
