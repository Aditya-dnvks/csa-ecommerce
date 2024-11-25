import { Button, Heading, TextField } from "@radix-ui/themes";
import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/auth-context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login, setLogin } = useContext(AuthContext);

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(formData, "Form submitted succesfully");
    // login(formData);

    if (formData.password.length < 4) {
      enqueueSnackbar("Password is too short", { variant: "error" });
      return;
    }
    /// login a user --- > check in database and validation
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        formData,
        { ContentType: "application/json" }
      );
      enqueueSnackbar("User Login successfully", { variant: "success" });
      navigate("/");
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  return (
    <div className="d-flex flex-row justify-content-around align-items-center bg-container">
      <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" />

      <form className="FormRoot" onSubmit={submitHandler}>
        <Heading className="text-center"> Login Form</Heading>
        <TextField.Root
          placeholder="Email ID"
          className="m-4"
          required
          onChange={onHandleChange}
          name="email"
        ></TextField.Root>

        <TextField.Root
          placeholder="Password"
          className="m-4"
          required
          onChange={onHandleChange}
          name="password"
          type="password"
        ></TextField.Root>

        <div className="text-center">
          <Button type="submit">Login</Button>
        </div>
        <p className="text-center mt-2">
          Don't have an account?{" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
