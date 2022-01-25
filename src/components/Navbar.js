import React from "react";
import {
  FaSearch,
  FaTelegramPlane,
  FaRegCompass,
  FaRegHeart,
} from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { useContextData } from "../Global/Context";
const Navbar = () => {
  const { model, openModel } = useContextData();
  console.log("my model", model);
  const openForms = () => {
    openModel();
  };

  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <img src="/images/instagramLogo.png" alt="" />
        </div>
      </div>
      <div className="navbar__middle">
        <div className="navbar__middle-search">
          <input
            type="text"
            name="search"
            className="navbar__search"
            placeholder="Search"
          />
          <FaSearch className="searchIcon" />
        </div>
      </div>
      <div className="navbar__last">
        <li>
          <MdHome className="navbar__icons" />
        </li>
        <li>
          <FaTelegramPlane className="navbar__icons" />
        </li>
        <li>
          <FaRegCompass className="navbar__icons" />
        </li>
        <li>
          <FaRegHeart className="navbar__icons" />
        </li>
        <li onClick={openForms}>Register/Login</li>
      </div>
    </div>
  );
};

export default Navbar;
