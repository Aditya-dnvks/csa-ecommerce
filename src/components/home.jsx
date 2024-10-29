import { Link } from "react-router-dom";
import "./home.css";
// import { Alert, Button, Card } from "react-bootstrap";
// import { Button } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import { Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("https://fakestoreapi.com/products"); // 3rd Paarty
      console.log(resp.data, "FETCHED DATA from Axios");

      const fetchedData = await fetch("https://fakestoreapi.com/products"); // in-built from Web API
      const finalFethcData = await fetchedData.json();

      console.log(finalFethcData, "from Fecth API");
    }
    console.log("useEffect triggered in componentDidMount");
    console.log("I can do API calls here");
    fetchData();
  }, []); /// this is similar to componentDidMount

  return (
    <div className="bg-secondary w-50 p-4">
      <h1> I have redered this many times : {value}</h1>
      <button onClick={() => setValue(value + 1)}> Addd</button>
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
