import { Button, Heading, TextField } from "@radix-ui/themes";
import "./signup.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/auth-context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  console.log("new feature by heamnth");

  const navigate = useNavigate();

  const { signUp } = useContext(AuthContext);

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (formData.password.length < 4) {
      enqueueSnackbar("Password is too short", { variant: "error" });
      return;
    }
    /// register a user --- > new data to be posted in database
    try {
      const response = await axios.post(
        "http://localhost:3000/user/register",
        formData,
        { ContentType: "application/json" }
      );
      enqueueSnackbar("User registered successfully", { variant: "success" });
      navigate("/");
    } catch (err) {
      enqueueSnackbar(err.message, { variant: "error" });
    }
  };

  return (
    <div className="d-flex flex-row justify-content-around align-items-center bg-container">
      <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg" />
      <form className="FormRoot" onSubmit={submitHandler}>
        <Heading className="text-center"> Sign Up Form</Heading>
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
          onChange={onHandleChange}
          type="email"
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

        <p className="text-center mt-2">
          Already have an account?{" "}
          <span>
            <Link to="/">Login</Link>
          </span>
        </p>
      </form>

      {/* <Form.Root>
        <Form.Field className="FormField" name="firstname">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">First Name</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your First Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="lasttname">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Last Name</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your Last Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="text" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="phonenumber">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Phone Number</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your Mobile Number
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="tel" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Email</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="email" required />
          </Form.Control>
        </Form.Field>
        <Form.Field className="FormField" name="password">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Form.Label className="FormLabel">Password</Form.Label>
            <Form.Message className="FormMessage" match="valueMissing">
              Enter the password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input className="Input" type="password" required />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild></Form.Submit>
      </Form.Root> */}
    </div>
  );
};

//stylesheet
export default Signup;
