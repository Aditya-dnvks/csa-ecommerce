import "./home.css";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Auth/auth-context";
import Login from "../login/login";
import Products from "../products/Products.JSX";
import { Heading } from "@radix-ui/themes";
import CarouselItem from "./carousel";
import { enqueueSnackbar } from "notistack";
import { Circles } from "react-loader-spinner";

const Home = () => {
  const [productsData, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const { isLogin } = useContext(AuthContext);

  const passwords = ["fff", "tyyy", "tyhrtyh", "ythtyhtyjyj", "htyjhtyj"];

  // const filteredArr = [];

  // for (let i = 0; i < passwords.length; i++) {
  //   if (passwords[i].length >= 6) {
  //     filteredArr.push(passwords[i]);
  //   }
  // }

  // console.log(filteredArr, "Filter Array-Imperative");

  const filteredArr = passwords.filter(filtering);

  function filtering(each) {
    return each.length > 6;
  }

  console.log(filteredArr, "filtered arr - Declarative");

  useEffect(() => {
    document.title = "CSA Bazaar";
    const fetchData = async () => {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        setProducts(resp.data);
      } catch (err) {
        enqueueSnackbar(`${err.message}`, {
          variant: "error",
        });
      } finally {
        setLoader(false);
      }
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
          <Heading className="text-center m-3"> Our Products:</Heading>
          {loader ? (
            <div className="d-flex justify-content-center">
              <Circles
                height="80"
                width="80"
                color="#f57f00"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : (
            <Products products={productsData} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
