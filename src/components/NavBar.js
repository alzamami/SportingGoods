import React from "react";
import { ThemeButton, NavProduct, Logo } from "../styles";
import lightlogo from "../logos/light-logo.png";
import darklogo from "../logos/dark-logo.png";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Logo to="/" className="navbar-brand">
          <img
            src={props.webTheme === "light" ? lightlogo : darklogo}
            alt="name"
          />
        </Logo>
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <ThemeButton onClick={props.toggleTheme}>
            {props.webTheme === "light" ? "Light" : "Dark"} Theme
          </ThemeButton>
          <NavProduct to="/products" className="nav-link ms-auto">
            Products
          </NavProduct>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
