import React from "react";
import "../../styling/NavSection.css";
import user from "../../images/user.svg";
import { BsBell } from "react-icons/bs";

const NavSection = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-white nav-control">
        <div className="nav-contain">
          <div className="container-fluid">
            <a className="navbar-brand transmonitor-header  text-primary">
              TransMonitor
            </a>
          </div>

          <i className="fa-solid fa-magnifying-glass  search-contain"></i>
          <input className="search-form" type="text" placeholder="Search..." />
        </div>

        <div className="list-contain text-dark-50">
          <ul>
            <a>Support</a>
            <a>FAQ</a>
            <a>
              <div className="notification-container">
                <span class="notification">5</span>
                <span>
                  <BsBell />
                </span>
              </div>
            </a>
            <div className="username">
              <small>Hello</small>
              <h6>Oluwaleke Ojo</h6>
            </div>
          </ul>
          <img src={user} />
        </div>
      </nav>
    </div>
  );
};

export default NavSection;
