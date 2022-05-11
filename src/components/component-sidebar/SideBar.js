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
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "scroll initial",
          bottom: 0,
        }}
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
              <Link exact="true" to="/" activeclassname="activeClicked">
                <CDBSidebarHeader icon="">Main</CDBSidebarHeader>
              </Link>
              <Link exact="true" to="/tables" activeclassname="activeClicked">
                <CDBSidebarMenuItem icon="table">Overview</CDBSidebarMenuItem>
              </Link>
              <Link exact="true" to="/profile" activeclassname="activeClicked">
                <CDBSidebarHeader>Payments</CDBSidebarHeader>
              </Link>
              <Link
                exact="true"
                to="/analytics"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="wallet">
                  All Payments
                </CDBSidebarMenuItem>
              </Link>

              <Link
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  {/* <span className="material-symbols-outlined">credit_score</span> */}
                  Reconcile Payments
                </CDBSidebarMenuItem>
              </Link>

              <Link
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  {/* <span className="material-symbols-outlined">credit_score</span> */}
                  Un - Reconcile Payments
                </CDBSidebarMenuItem>
              </Link>

              <Link
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="circle-dot">
                  {/* <span className="material-symbols-outlined">credit_score</span> */}
                  Manual Settlement
                </CDBSidebarMenuItem>
              </Link>

              <CDBSidebarHeader>Orders</CDBSidebarHeader>
              <Link
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="circle-dot">
                  {/* <span className="material-symbols-outlined">credit_score</span> */}
                  All Orders
                </CDBSidebarMenuItem>
              </Link>

              <Link
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="circle-dot">
                  {/* <span className="material-symbols-outlined">credit_score</span> */}
                  Pending Orders
                </CDBSidebarMenuItem>
              </Link>

              <Link
                exact="true"
                to="/hero404"
                target="_blank"
                activeclassname="activeClicked"
              >
                <CDBSidebarMenuItem icon="circle-dot">
                  {/* <span className="material-symbols-outlined">credit_score</span> */}
                  Reconcile Orders
                </CDBSidebarMenuItem>
              </Link>

              <CDBSidebarMenuItem icon="circle-dot">
                {/* <span className="material-symbols-outlined">credit_score</span> */}
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
