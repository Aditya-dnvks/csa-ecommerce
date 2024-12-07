import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { useContext } from "react";
import { AuthContext } from "./components/Auth/auth-context";
const Header = () => {

  const { isLogin,logout} = useContext(AuthContext);
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
       {
        !isLogin && (
        <li className="m-3">
          <Link to="/login">Login</Link>
        </li>

        )
       }

          {/* {
        !isLogin && (
        <li className="m-3">
          <Link to="/signup">SignUp</Link>
        </li>

        )
       } */}



        <li className="m-3">
          <Link to="/cart">Cart</Link>
        </li>

        {
          isLogin && (<li className="m-3 text-white" onClick={logout}>
          Logout
          </li>)
        }

      </ul>
    </nav>
  );
};

export default Header;
