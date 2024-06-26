import {useState,useEffect} from 'react'
import { createContext } from 'react'
import { getFavouriteProducts } from "../services/products-service";
import { updateFavouriteProducts } from '../services/products-service';
export const FavouriteProductsContext = createContext(null);

const FavouriteProductsContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [favProducts, setFavProducts] = useState([]);
  const [count,setCount] = useState(0);
   
  useEffect(() => {
    setErrMsg(null);
    setIsLoading(true);
    getFavouriteProducts()
      .then((products) => {
        setFavProducts(products);
        if(products.length !== count){
          setCount(products.length);
        }
      })
      .catch((e) => {
        setErrMsg(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
   
  }, []);
  const updateFav = (product,isLiked) => {
    updateFavouriteProducts(product.docId, isLiked);    
    if(isLiked) {
      product.favourite = true;
      favProducts.push(product);
      setCount(count+1);
    } else {
      setFavProducts(favProducts.filter(prod=>prod.docId !== product.docId));
      setCount(count-1);
    }
  }
  const getFavCount = () => {
    return count;
  }
  return (<FavouriteProductsContext.Provider value = {{favProducts,updateFav,getFavCount,isLoading,errMsg}}>
     {children}
  </FavouriteProductsContext.Provider>);
}
export default FavouriteProductsContextProvider