import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

// react context
// redux -- complex -re ducers, action

export const AuthProvider = ({ children }) => {
  // ch.email === formData.email && each.password === formData.password
  //     );
  //   });

  //   if (filteredArr.length > 0) {
  //     setLogin(true);
  //     localStorage.setItem("isLogin", JSON.stringify(true));
  //     enqueueSnackbar("Login successful!", { variant: "success" });
  //   } else {
  //     econst [isLogin, setLogin] = useState(
  //   JSON.parse(localStorage.getItem("isLogin"))
  // ); //local state management
  // const navigate = useNavigate();

  // const API_URL = "https://the-techie-crud.onrender.com";

  // useEffect(() => {
  //   !localStorage.getItem("isLogin")
  //     ? localStorage.setItem("isLogin", JSON.stringify(isLogin))
  //     : null;
  // }, []);

  // const login = async (formData) => {
  //   const usersData = localStorage.getItem("users")
  //     ? JSON.parse(localStorage.getItem("users"))
  //     : [];

  //   const filteredArr = usersData.filter((each) => {
  //     return (
  //       eanqueueSnackbar("Wrong email or Password. Please re-check", {
  //       variant: "error",
  //     });
  //   }
  // };

  // const logout = async () => {
  //   setLogin(false);
  //   localStorage.setItem("isLogin", JSON.stringify(false));
  //   enqueueSnackbar("Logout successful!", { variant: "info" });
  //   navigate("/");
  // };

  // const signUp = async (formData) => {
  //   const { email } = formData;

  //   const usersData = localStorage.getItem("users")
  //     ? JSON.parse(localStorage.getItem("users"))
  //     : [];

  //   const filteredArr = usersData.filter((each) => {
  //     return each.email === email;
  //   });

  //   if (filteredArr.length > 0) {
  //     enqueueSnackbar("User Already exist", { variant: "error" });
  //     return;
  //   } else {
  //     usersData.push(formData);
  //     console.log(usersData, "after pushing");
  //     localStorage.setItem("users", JSON.stringify(usersData));
  //     enqueueSnackbar("Account created successfully. you can login now!", {
  //       variant: "success",
  //     });
  //     navigate("/");
  //   }
  // };

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
