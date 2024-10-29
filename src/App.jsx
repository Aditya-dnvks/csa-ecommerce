import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import Header from "./header";
import Form from "./components/form";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
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
