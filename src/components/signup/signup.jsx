import { Button, TextField, Heading } from "@radix-ui/themes";
import "./signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/auth-context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: " ",
    password: " ",
    firstName: " ",
    lastName: " ",
    // confirmPassword:" ",
  });
  const navigate =useNavigate();

  const {signUp} = useContext(AuthContext);



  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signUp(formData);
 
  };

  return (
    <div className="d-flex flex-row justify-content-around align-items-center bg-container">
      <img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1805.jpg" />
      <form className="FormRoot" onSubmit={submitHandler}>
        <Heading className="text-center"> SignUp Form</Heading>
        <TextField.Root
          placeholder="First name"
          className="m-4"
          name="firstName"
          onChange={onHandleChange}
        ></TextField.Root>
        <TextField.Root
          placeholder="Last name"
          className="m-4"
          name="lastName"
          onChange={onHandleChange}
        ></TextField.Root>
        <TextField.Root
          placeholder="Email"
          className="m-4"
          name="email"
          // type="email"
          onChange={onHandleChange}
        ></TextField.Root>
        <TextField.Root
          placeholder="Password"
          className="m-4"
          name="password"
          type="password"
          onChange={onHandleChange}
        ></TextField.Root>
         {/* <TextField.Root
          placeholder="Confirm  Password"
          className="m-4"
          name="confirmPassword"
          type="password"
          onChange={onHandleChange}
        ></TextField.Root> */}
        
        <div className="text-center">
        <p>Don't have account ? <span><Link to="/login">Login</Link></span></p>
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

//stylesheet
export default Signup;
