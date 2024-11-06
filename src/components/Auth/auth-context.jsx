import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false); //local state management
  const navigate = useNavigate();

  const API_URL = "https://the-techie-crud.onrender.com";

  const login = async (formData) => {
    const usersData = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const filteredArr = usersData.filter((each) => {
      return each.email === formData.email;
    });

    if (filteredArr.length > 0) {
      setLogin(true);
      enqueueSnackbar("Login successful!", { variant: "success" });
    } else {
      enqueueSnackbar("Wrong email or Password. Please re-check", {
        variant: "error",
      });
    }
  };

  const logout = async () => {
    setLogin(false);
  };

  const signUp = async (formData) => {
    const { email } = formData;

    const usersData = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    const filteredArr = usersData.filter((each) => {
      return each.email === email;
    });

    if (filteredArr.length > 0) {
      enqueueSnackbar("User Already exist", { variant: "error" });
      return;
    } else {
      usersData.push(formData);
      console.log(usersData, "after pushing");
      localStorage.setItem("users", JSON.stringify(usersData));
      enqueueSnackbar("Account created successfully. you can login now!", {
        variant: "success",
      });
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider value={{ login, setLogin, isLogin, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
