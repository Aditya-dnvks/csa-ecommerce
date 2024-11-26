import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";
import Signup from "./components/signup/signup";

import { AuthContext } from "./components/Auth/auth-context";
import NotFound from "./components/not-found/not-found";
import ProductDetails from "./components/product-details/product-details";

function App() {
  const isLogin = localStorage.getItem("token");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!isLogin && <Route path="/signup" element={<Signup />} />}
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 100,
//     };
//   }

//   //bind,call, apply
//   increment = () => {
//     this.setState((prevState) => {
//       console.log(prevState, "prev sgtate");
//       return { count: prevState.count + 10 };
//     });
//   };

//   decrement = () => {
//     console.log("decrement cliecked");
//   };

//   render() {
//     console.log("render called");

//     return (
//       <>
//         <Header />
//         <div>
//           <a href="https://vitejs.dev" target="_blank">
//             <img src={viteLogo} className="logo" alt="Vite logo" />
//           </a>
//           <a href="https://react.dev" target="_blank">
//             <img src={reactLogo} className="logo react" alt="React logo" />
//           </a>
//         </div>
//         <h1>Vite + React</h1>
//         <div className="card">
//           <button>count is {this.state.count}</button>
//           <p onClick={this.increment}> + </p>
//           <p onClick={this.decrement}> - </p>
//         </div>
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more
//         </p>
//       </>
//     );
//   }
// }

export default App;
