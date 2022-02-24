import React from "react";
import { useState } from "react";
import "../../styles/style-navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const Close = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Justin.Hartsink
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/Home"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
