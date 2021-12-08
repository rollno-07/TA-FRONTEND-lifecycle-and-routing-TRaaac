import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="icons">
        <NavLink to="/" exact activeC>
          <div className="icon">
            <i class="fas fa-home"> </i>
            <span> Home</span>
          </div>
        </NavLink>
        <NavLink to="/articles" exact>
          <div className="icon">
            <i class="fas fa-font"> </i>
            <span> Articles</span>
          </div>
        </NavLink>

        <NavLink to="/people">
          <div className="icon">
            <i class="fas fa-user-friends"> </i>
            <span> People</span>
          </div>
        </NavLink>

        <NavLink to="/books" exact>
          <div className="icon">
            <i class="fas fa-book"> </i>
            <span> Books</span>
          </div>
        </NavLink>

        <NavLink to="/help&support" exact>
          <div className="icon">
            <i class="fas fa-question-circle"></i>
            <span> Help & Supports</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
