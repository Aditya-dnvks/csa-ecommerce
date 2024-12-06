import { AuthContext } from "../Auth/auth-context";
import Login from "../login/login";
import "./home.css";
import React, { useContext } from "react";

const Home = () => {
  const {isLogin} =useContext(AuthContext)
  return (
    <>
    {
      !isLogin ? (<Login/>) :(
    
    <div className="design">
      <h1> Welcome To Home Page</h1>
    <img src="https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg"/>
    </div>

      )
    }
    
    </>
  );
};

export default Home;

