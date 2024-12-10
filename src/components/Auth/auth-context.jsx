import { createContext, useState } from "react";
import axios from 'axios'
import {  useNavigate } from "react-router-dom";
import {SnackbarProvider,enqueueSnackbar} from 'notistack'


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false); 
  const navigate =useNavigate();

  const API_URL="https://the-techie-crud.onrender.com/doc"

  const login = async(formData) => {
       const usersData= localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

    const filteredArr= usersData.filter((each)=>{
       return each.email === formData.email;
    
  })
     console.log(filteredArr,"filteredArr");

     if(filteredArr.length> 0){
       setLogin(true);
       localStorage.setItem("isLogin",JSON.stringify(true));
       enqueueSnackbar("Succesfully Login",{variant:"success"})
       navigate("/");
      }else{
       enqueueSnackbar("Wrong email or password",{variant:"error"});
       return 
     }

  };

     const logout=async()=>{
       setLogin(false);
       localStorage.setItem("isLogin",JSON.stringify(false));
       enqueueSnackbar("Succesfully Logout",{variant:"info"});
       navigate("/login");
       
     }

    const signUp = async (formData) => {
        const { email } = formData;

        const usersData= localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [];   
        
        const filteredArr = usersData.filter((each)=>{
             return each.email === email;
        });


         if(filteredArr.length> 0){
          enqueueSnackbar("User alreday exists", {variant:"error"});
          return 
         }else{
          usersData.push(formData);
         
          localStorage.setItem("users", JSON.stringify(usersData))
          navigate("/");

         }

        };

  return (
    <AuthContext.Provider value={{ login, isLogin, setLogin, signUp,logout}}>
               {children}
    </AuthContext.Provider>
  );
};