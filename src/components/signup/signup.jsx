import { Button, TextField, Heading } from "@radix-ui/themes";
import "./signup.css";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: " ",
    password: " ",
    firstName: " ",
    lastName: " ",
  });
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData, "form data sucessfully submited");
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
        <div className="text-center">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

//stylesheet
export default Signup;
