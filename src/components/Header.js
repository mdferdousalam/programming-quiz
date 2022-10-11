import { NavLink } from "react-router-dom";
import * as React from "react";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="flex justify-between">
      <NavLink
        to="/"
        className="md:text-3xl md:font-bold ml-5 mx-auto p-5 md:p-10"
      >
        Programming Interwiew
      </NavLink>
      <div className="md:text-3xl  md:font-medium p-5 md:p-10">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="md:p-10 pr-2 hover:text-orange-400"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="md:p-10 pr-2 hover:text-orange-400"
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="md:p-10 pr-2 hover:text-orange-400  "
          to="/blog"
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
