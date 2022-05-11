import React from "react";
import "../../styling/NavSection.css";
import user from "../../images/user.svg";
import Sidebar from "../component-sidebar/SideBar.js";
import Card from "../card-component/Card.js";
import Chart from "../chart-component/Chart.js";
import Table from "../table components/Table.js";
import { Link } from "react-router-dom";
import { BsBell } from "react-icons/bs";

import { BrowserRouter as Router } from "react-router-dom";

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
      <div className=" d-flex">
        <Router>
          <Sidebar />
        </Router>

        <div className="container-fluid" style={{ marginLeft: "70px" }}>
          <div className="row">
            <div className="col-12">
              <Card />
            </div>
            <div className="col-12">
              <Chart />
            </div>
            <div className="col-12">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
