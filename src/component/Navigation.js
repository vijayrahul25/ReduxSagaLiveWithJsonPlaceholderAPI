import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <ul className="nav nav-pills">
    <li className="nav-item">
      <NavLink exact={true}  to={"/"} activeClassName="active" className="nav-link">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={"/ShowPosts"} activeClassName="active" className="nav-link">
        All Posts
      </NavLink>
    </li>
    <li>
      <NavLink to={"/showAuthors"} activeClassName="active" className="nav-link">
        All Authors
      </NavLink>
    </li>
    
  </ul>
);
export default Navigation;
