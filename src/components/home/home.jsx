import axios from "axios";
import { AuthContext } from "../Auth/auth-context";
import Login from "../login/login";
import React, { useContext, useEffect, useState } from "react";
import Products from "../products/products.JSX";
import { Heading, Spinner } from "@radix-ui/themes";
import CarouselItem from "./carousel";
import { enqueueSnackbar } from "notistack";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";

const Home = () => {
  const [productsData, setProducts] = useState([]);
  const [loader, setloader] = useState(true);

  const { isLogin } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        setProducts(resp.data);
        setloader(false);
      } catch (err) {
        enqueueSnackbar(`${err.message}`, { variant: "error" });
      } finally {
        setloader(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {!isLogin ? (
        <Login />
      ) : (
        <div className="design">
          <CarouselItem />
          <Heading className="text-center m-3">Fashion Store:</Heading>
          {loader ? (
            <div className="text-center">
              <h2>Loading...</h2>
            </div>
          ) : (
            <Products products={productsData} />
          )}
          {/* <img src="https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg"/> */}
        </div>
      )}
    </>
  );
};

export default Home;
