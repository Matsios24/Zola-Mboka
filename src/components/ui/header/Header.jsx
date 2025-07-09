import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBolt, FaTrophy } from "react-icons/fa";
import style from "./header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={style.navbarContainer}>
      <ul>
        <li>
          <Link to="/">
            <AiFillHome />
          </Link>
        </li>
        <li>
          <Link to="/premiumEvents">
            <FaBolt />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaTrophy />
          </Link>
        </li>
        <li>
          <Link to="/showEvent">Show </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
