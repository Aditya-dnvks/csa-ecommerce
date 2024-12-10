import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Cart from "./components/cart/cart";
import Signup from "./components/signup/signup";
import { AuthContext } from "./components/Auth/auth-context";
import NotFound from "./components/not-found/not-pound";
import ProductDetails from "./components/products-details/product-details";

function App() {
  const {isLogin,logout}=useContext(AuthContext);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* {
          isLogin &&   <Route path="/signup" element={<Signup />} />

        } */}
        <Route path="/products/:id" element={<ProductDetails/>} />      
        <Route path="/signup" element={<Signup />} />      
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
