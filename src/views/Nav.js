import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";

function Nav() {
  return (
    <div className="topnav">
      <NavLink activeclassname="active" to="/">
        Home
      </NavLink>
      <NavLink to="/timer">Timer App</NavLink>
      <NavLink to="/todo">Todo App</NavLink>
      <NavLink to="/blog">Blogs</NavLink>
      <NavLink to="/secret">Secret</NavLink>
    </div>
  );
}

export default Nav;
