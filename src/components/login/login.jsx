import { Button, Heading, TextField } from "@radix-ui/themes";
import "./login.css";

const Login = () => {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center bg-container">
      <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?semt=ais_hybrid" />
      <form className="FormRoot">
        <Heading className="text-center">Login Form</Heading>
        <TextField.Root  required placeholder="Email" className="m-4"></TextField.Root>
        <TextField.Root   required  placeholder="Password" className="m-4"></TextField.Root>
        <div className="text-center">
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
