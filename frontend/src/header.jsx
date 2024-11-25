import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { useContext } from "react";
import { AuthContext } from "./components/Auth/auth-context";
import { Heading } from "@radix-ui/themes";

const Header = () => {
  const { isLogin, logout } = useContext(AuthContext);
  return (
    <nav className="bg-dark d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center justify-content-around gap-2">
        <Link to="/">
          <img src={reactLogo} />
        </Link>
        <Heading color="orange">
          <i> CSA Bazaar</i>
        </Heading>
      </div>

      {isLogin ? (
        <ul
          className="d-flex justify-content-end align-items-center"
          style={{ listStyle: "none" }}
        >
          <li className="m-3">
            <Link to="/" style={styles.listStyles}>
              Home
            </Link>
          </li>
          <li className="m-3">
            <Link to="/cart" style={styles.listStyles}>
              Cart
            </Link>
          </li>
          <li className="m-3 text-white" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <ul
          className="d-flex justify-content-end align-items-center"
          style={{ listStyle: "none" }}
        >
          <li className="m-3">
            <Link to="/" style={styles.listStyles}>
              Home
            </Link>
          </li>
          <li className="m-3">
            <Link to="/signup" style={styles.listStyles}>
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;

const styles = {
  listStyles: {
    color: "#FFF",
    textDecoration: "none",
  },
};