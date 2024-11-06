import { Button, Heading, TextField } from "@radix-ui/themes";
import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/auth-context";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, setLogin } = useContext(AuthContext);

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData, "Form submitted succesfully");
    login(formData);
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
        <p className="text-center">
          Don't have an account?{" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
        <div className="text-center">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
