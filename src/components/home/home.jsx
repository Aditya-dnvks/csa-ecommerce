import "./home.css";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Auth/auth-context";
import Login from "../login/login";
import Products from "../products/Products.JSX";
import { Heading } from "@radix-ui/themes";
import CarouselItem from "./carousel";

const Home = () => {
  const [productsData, setProducts] = useState([]);

  const { isLogin } = useContext(AuthContext);

  useEffect(() => {
    document.title = "CSA Bazaar";
    const fetchData = async () => {
      const resp = await axios.get("https://fakestoreapi.com/products");
      console.log(resp.data, "FETCHED DATA from Axios");
      setProducts(resp.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {!isLogin ? (
        <Login />
      ) : (
        <div>
          <CarouselItem />
          <Heading className="text-center"> Our Products:</Heading>
          <Products products={productsData} />
        </div>
      )}
    </div>
  );
};

export default Home;
