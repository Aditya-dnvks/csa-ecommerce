import { Link } from "react-router-dom";
import "./home.css";
// import { Alert, Button, Card } from "react-bootstrap";
// import { Button } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import { Rating, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Auth/auth-context";
import Login from "../login/login";

const Home = () => {
  const [value, setValue] = useState(0);

  const { isLogin } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("https://fakestoreapi.com/products"); // 3rd Paarty
      console.log(resp.data, "FETCHED DATA from Axios");
    }

    fetchData();
  }, []); /// this is similar to componentDidMount

  return (
    <div>
      {!isLogin ? (
        <Login />
      ) : (
        <div>
          <p> Welcome to Home page</p>
        </div>
      )}
    </div>
  );
};

export default Home;

const style = {
  submitButton: {
    borderRadius: 20,
    backgroundColor: "yellow",
    padding: 10,
    borderWidth: 0,
  },
  enrollButton: {
    borderRadius: 20,
    backgroundColor: "green",
    padding: 10,
    borderWidth: 0,
  },
};

// in-line
// internal --- Big projects---------
// external-css --- small projects
