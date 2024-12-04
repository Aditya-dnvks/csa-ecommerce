import { createContext, useState } from "react";
import axios from 'axios'


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false); 

  const API_URL="https://the-techie-crud.onrender.com/doc"

  const login = async(formData) => {
    const { email, password } = formData;
    const response = await axios.post(`${API_URL}/user-login`, {
    headers: 'Content-Type: "application/json',
    body: JSON.stringify({ email, password }),
    });
     setLogin(true)
    console.log(response);
    };
     
    const signUp = async (formData) => {
        const { email, password } = formData;
        const response = await axios.post(`${API_URL}/user-creation`, {
        headers: 'Content-Type: "application/json',
        body: JSON.stringify({ email, password }),
        });
        console.log(response);
        };

  return (
    <AuthContext.Provider value={{ login, isLogin, setLogin, signUp}}>
    {children}
    </AuthContext.Provider>
  );
};