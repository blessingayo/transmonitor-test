import React from "react";
import NavSection from "./components/component-nav/NavSection.js";
import Card from "./components/card-component/Card.js";
import Chart from "./components/chart-component/Chart.js";
import Table from "./components/table components/Table.js";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/component-sidebar/SideBar.js";

function App() {
  return (
    <Router>
      <div className="App">
        <NavSection />
        <div className="">
          <Sidebar />

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
    </Router>
  );
}

export default App;
