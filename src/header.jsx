import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { useContext } from "react";
import { AuthContext } from "./components/Auth/auth-context";
const Header = () => {

  const { isLogin} = useContext(AuthContext);
  return (
    <nav className="bg-dark d-flex justify-content-between align-items-center">
      <Link to="/">
        <img src={reactLogo} />
      </Link>

      <ul className="d-flex justify-content-end align-items-center">

      {
        isLogin && (<li className="m-3">
          <Link to="/">Home</Link>
          </li>)
      }
    
        <li className="m-3">
          <Link to="/login">Login</Link>
        </li>
        <li className="m-3">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className="m-3">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

// let a = 10;
// console.log(a);

// function hello() {
//   console.log("hello");
// }

// hello();

// // const resp = fetch("https://jsonplaceholder.typicode.com/todos/1"); // promise obj returns --
// const resp1 = fetch("https://jsonplaceholder.typicode.com/todos/2"); // promise obj returns
// const resp2 = fetch("https://jsonplaceholder.typicode.com/todos/3"); // promise obj returns

// async function fetching() {
//   const data1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log("1st data");
//   const data2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
//   console.log("2nd data");

//   const data3 = await fetch("https://jsonplaceholder.typicode.com/todos/3");
//   const final1 = await data1.json();

//   console.log(final1);

//   return "Hello";
// }

// console.log(fetching());

// //
// // resp
// //   .then((data) => {
// //     console.log(data);
// //     const response = data.json();

// //     response.then((data2) => {
// //       console.log(data2);

// //     }).catch(() => {
// //       console.log("error whem json() used")
// //     })
// //   })
// //   .catch((err) => {
// //     console.log("error when fetchin");
// //     console.log(err);
// //   });
