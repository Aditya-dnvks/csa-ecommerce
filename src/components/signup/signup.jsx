import { Button, Heading, TextField } from "@radix-ui/themes";
import "./signup.css";
import * as Form from "@radix-ui/react-form";
const Signup = () => {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center bg-container">
      <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg" />
      <form className="FormRoot">
        <Heading className="text-center"> Sign Up Form</Heading>
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
