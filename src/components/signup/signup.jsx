import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [dob, updateDob] = useState("");

  const handleChange1 = (e) => {
    updateName(e.target.value); /// this line is changing name = Karimulla to input entered
    console.log(e.target.value);
  };

  const handleChange2 = (e) => {
    updateEmail(e.target.value); /// this line is changing name = Karimulla to input entered
    console.log(e.target.value);
  };

  const handleChange3 = (e) => {
    updateDob(e.target.value); /// this line is changing name = Karimulla to input entered
    console.log(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form data: ", { name, email, dob });
    console.log("submitted");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Link to="/"> Go to Home</Link>
      <form>
        <div className="d-flex flex-column justify-content-center align-items-center bg-warning vh-50 p-5 rounded">
          <label>
            Name
            <input
              type="text"
              onChange={handleChange1}
              value={name}
              style={{
                borderRadius: 10,
                padding: 10,
                borderWidth: 1,
                borderColor: "grey",
                margin: 5,
              }}
              placeholder="Enter Name"
            />
            {name.length > 10 && (
              <p className="text-danger"> *Length is greater than 10</p>
            )}
          </label>
          <label>
            Email
            <input
              type="email"
              onChange={handleChange2}
              value={email}
              style={{
                borderRadius: 10,
                padding: 10,
                borderWidth: 1,
                borderColor: "grey",
                margin: 5,
              }}
              placeholder="Enter Email"
            />
          </label>

          <label>
            Date of Birth
            <input
              type="date"
              onChange={handleChange3}
              value={dob}
              style={{
                borderRadius: 10,
                padding: 10,
                borderWidth: 1,
                borderColor: "grey",
                margin: 5,
              }}
              placeholder="Enter DOB"
            />
          </label>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

//stylesheet
export default Signup;
