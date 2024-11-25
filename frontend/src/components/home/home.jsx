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
        const resp = await axios.get("http://localhost:3000/products");
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

  const postProduct = async () => {
    try {
      const response = await axios.post("http://localhost:3000/products/", {
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: {
          rate: 4.7,
          count: 500,
        },
        ContentType: "application/json", //request headers
      });

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {!isLogin ? (
        <Login />
      ) : (
        <div>
          <CarouselItem />
          <button className="btn btn-primary" onClick={postProduct}>
            {" "}
            Add Product
          </button>
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
