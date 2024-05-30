import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WishListPage from "./pages/WishListPage/WishListPage";
import NavBar from "./components/NavBar/NavBar";
import ProductsLoader from "./containers/ProductLoader/ProductLoader";
import CartPage from "./pages/CartPage/CartPage";
import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";
import Banner from "./components/Banner/Banner";
import FavouriteProductsContextProvider, { FavouriteProductsContext } from "./contexts/FavouriteProductsContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <FavouriteProductsContextProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/eshop" element={<HomePage />} />
          <Route path="/eshop/:page" element={<ProductsListPage />} />
          <Route path="/eshop/wishlist" element={<WishListPage />} />
          <Route path="/eshop/products/:id" element={<ProductsLoader />} />
          <Route path="/eshop/cart" element={<CartPage />} /> 
        </Routes>
        </FavouriteProductsContextProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
