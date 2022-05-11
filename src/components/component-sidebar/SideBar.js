import React from "react";
import "../../styling/SideBar.css";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div
        style={{ display: "flex", height: "100vh", position: "fixed", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#333" backgroundColor="#fff">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              <button className="generate-button">Generate Invoice</button>
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu className="menu-bar">
              <NavLink exact="true" to="/" activeclassname="activeClicked">
                <CDBSidebarHeader icon="">Main</CDBSidebarHeader>
              </NavLink>
              <NavLink
                exact="true"
                to="/tables"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="table">Overview</CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact="true"
                to="/profile"
                activeclassname="activeClicked"
              >
                <CDBSidebarHeader>Payments</CDBSidebarHeader>
              </NavLink>
              <NavLink
                exact="true"
                to="/analytics"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="wallet">
                  All Payments
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  {/* <span class="material-symbols-outlined">credit_score</span> */}
                  Reconcile Payments
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  {/* <span class="material-symbols-outlined">credit_score</span> */}
                  Un - Reconcile Payments
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="circle-dot">
                  {/* <span class="material-symbols-outlined">credit_score</span> */}
                  Manual Settlement
                </CDBSidebarMenuItem>
              </NavLink>

              <CDBSidebarHeader>Orders</CDBSidebarHeader>
              <NavLink
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="circle-dot">
                  {/* <span class="material-symbols-outlined">credit_score</span> */}
                All Orders
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="circle-dot">
                  {/* <span class="material-symbols-outlined">credit_score</span> */}
                Pending Orders
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="circle-dot">
                  {/* <span class="material-symbols-outlined">credit_score</span> */}
                Reconcile Orders
                </CDBSidebarMenuItem>
              </NavLink>

              <CDBSidebarMenuItem icon="circle-dot">
                  {/* <span class="material-symbols-outlined">credit_score</span> */}
                Merchant Profile
                </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>

            
            <div
              style={{
                padding: "20px 5px",
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>

    </div>
  );
};

export default Sidebar;
