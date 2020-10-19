import React, { useState } from "react";

import logo from "../../assets/images/logo.webp";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
import { FaAlignRight } from "react-icons/fa";

const Header = () => {
  
  const [ isOpen, setIsOpen ] = useState( false );

    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Solerchil logo" className="logo" />
            </Link>
            <button type="button" className="nav-btn" onClick={ () => setIsOpen( !isOpen ) }>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={ isOpen ? "nav-links show-nav" : "nav-links" }>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/initiatives">Initiatives</NavLink>
            </li>
            <li>
              <NavLink to="/contributors">Contributors </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );

}
export default Header;
