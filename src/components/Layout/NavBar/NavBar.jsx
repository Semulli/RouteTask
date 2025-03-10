import React from "react";
import Logo from "../../../assets/logo.png";
import "./navBar.css";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../Constants/Router";
import { useLocation } from "react-router-dom";


const NavBar = () => {
  const location = useLocation()
  // console.log(location.pathname);
  
  return (
    <div>
      <nav className="navBar">
        <div className="main">
          <img className="logo" src={Logo} alt="" />

          <div>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/about"
              className={location.pathname.startsWith("/about") ? "active" : ""}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
            <Link
              to="/product"
              className={location.pathname === "/product" ? "active" : ""}
            >
              Menu
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
