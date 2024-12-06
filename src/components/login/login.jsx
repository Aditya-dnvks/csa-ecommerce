import { Button, Heading, TextField } from "@radix-ui/themes";
import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/auth-context";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
     email: " ",
     password: " ",
    });

    const { login, setLogin} = useContext(AuthContext);
  
    const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ... formData, [name]: value });
    };

    const submitHandler = (e) =>{
      e.preventDefault();
      console.log(formData,"form data sucessfully submited");
      login(formData)
 
      
    }
 

  return (
    <div className="d-flex flex-row justify-content-around align-items-center bg-container">
      <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?semt=ais_hybrid" />
      <form className="FormRoot"  onSubmit={submitHandler}>
        <Heading className="text-center">Login Form</Heading>
        <TextField.Root
          required
          placeholder="Email"
          className="m-4"
          onChange={onHandleChange}
          name="email"
        ></TextField.Root>
        <TextField.Root
          required
          placeholder="Password"
          className="m-4"
          onChange={onHandleChange}
          name="password"
          type="password"
        ></TextField.Root>
        <div className="text-center">
        <p>Don't have account <span><Link to="/signup">Signup</Link></span></p>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
