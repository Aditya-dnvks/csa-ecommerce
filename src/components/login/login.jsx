import { Button, Heading, TextField } from "@radix-ui/themes";
import "./login.css";
const Login = () => {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center bg-container">
      <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" />

      <form className="FormRoot">
        <Heading className="text-center"> Login Form</Heading>
        <TextField.Root
          placeholder="Email ID"
          className="m-4"
          required
        ></TextField.Root>
        <TextField.Root
          placeholder="Password"
          className="m-4"
          required
        ></TextField.Root>
        <div className="text-center">
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
