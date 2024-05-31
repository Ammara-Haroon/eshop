import React, { useEffect, useState } from "react";
import style from "./ProductLoader.module.scss";
import { getProductById } from "../../services/products-service";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ProductPage from "../../pages/ProductPage/ProductPage";
import { useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const ProductsLoader = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  useEffect(() => {
    setErrMsg(null);
    setIsLoading(true);
    getProductById(id)
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => {
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
      {!errMsg && !isLoading && product && <ProductPage product={product} />}
    </div>
  );
};
export default ProductsLoader;
