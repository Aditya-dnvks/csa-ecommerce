import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Cart from "./components/cart/cart";
import Signup from "./components/signup/signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
