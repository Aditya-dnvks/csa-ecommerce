import { Button, TextField, Heading } from "@radix-ui/themes";
import "./signup.css";
import * as Form from "@radix-ui/react-form";
const Signup = () => {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center bg-container">
      <img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-online-registration_516790-1805.jpg" />
      <form className="FormRoot">
       
        <Heading className="text-center"> SignUp Form</Heading>
        <TextField.Root
          placeholder="First name"
          className="m-4"
        ></TextField.Root>
        <TextField.Root
          placeholder="Last name"
          className="m-4"
        ></TextField.Root>
        <TextField.Root placeholder="Email" className="m-4"></TextField.Root>
        <TextField.Root placeholder="Password" className="m-4"></TextField.Root>
        <div className="text-center">
          <Button>Sign Up</Button>
        </div>
      </form> 
    </div>
  );
};

//stylesheet
export default Signup;
