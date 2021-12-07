import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="icons">
        <NavLink to="/" exact>
          <div className="icon">
            <i class="fas fa-home"> </i>
            <span> Home</span>
          </div>
        </NavLink>
        <div className="icon">
          <i class="fas fa-font"> </i>
          <span> Articles</span>
        </div>
        <div className="icon">
          <i class="fas fa-user-friends"> </i>
          <span> People</span>
        </div>
        <div className="icon">
          <i class="fas fa-book"> </i>
          <span> Books</span>
        </div>
        <div className="icon">
          <i class="fas fa-question-circle"> </i>
          <span> Help & Supports</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
