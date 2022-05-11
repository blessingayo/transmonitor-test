import React from "react";
import "../../styling/Chart.css";
import growingChart from "../../images/growingChart.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import horizonLine from "../../images/horizonLine.svg";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {CgArrowLeftR} from "react-icons/cg"
import {CgArrowRightR} from "react-icons/cg"
const Chart = (props) => {
  return (
    <div className="row mt-5 px-3">
      <div className="col-md-8">
        <div className=" bg-white  p-3 shadow-sm  rounded ">
          <div className="row  mb-5">
            <div className="col-md-6">
              <p className="fs-5">Today: 5, Aug 2018</p>
            </div>
            <div className="col-md-6 justify-content-between d-flex">
              <input type="text" placeholder="1 Jan - 1 Jun"></input>
              <div className="d-flex ">
                <div>
                <CgArrowLeftR  className="btn-dropdown"/>
                </div>
                <div>
                <CgArrowRightR   className="btn-dropdown"/>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ul className="d-flex  justify-content-evenly list-style-none date">
              <div>
                <p>Jan</p>
                <div className="horizontal"></div>
              </div>

              <div>
                <p>Feb</p>
                <div className="horizontal"></div>
              </div>

              <div>
                <p>Mar</p>
                <div className="horizontal"></div>
              </div>

              <div>
                <p>Apr</p>
                <div className="horizontal"></div>
              </div>

              <div>
                <p>May</p>
                <div className="horizontal"></div>
              </div>

              <div>
                <p>Jun</p>
              </div>
            </ul>

            <img className="growing-chart" src={growingChart} />
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className=" bg-white p-4  col-md-20  shadow-sm  rounded">
          <p>Orders</p>
          <div
            class="progress"
            style={{ height: "5px", backgroundColor: "#FDC203" }}
          >
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                width: "70%",
                height: "5px",
                backgroundColor: "#27AE60",
              }}
            >
              <span class="sr-only">70% Complete</span>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p>
              Pending Orders :<span className="twenty-orders"> 20</span>
            </p>
            <p>
              Reconciled Orders :<span className="eighty-orders"> 80</span>
            </p>
            <p>
              Total Orders :<span className="hundred-orders"> 100</span>
            </p>
          </div>
        </div>

        <div className=" bg-white p-4  col-md-20  shadow-sm  rounded">
          <p>Payments</p>
          <div
            class="progress"
            style={{ height: "5px", backgroundColor: "#FDC203" }}
          >
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                width: "70%",
                height: "5px",
                backgroundColor: "#27AE60",
              }}
            >
              <span class="sr-only">70% Complete</span>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p>
              Un-reconciled Payments :<span className="twenty-orders"> 20</span>
            </p>
            <p>
              Reconciled Payments :<span className="eighty-orders"> 80</span>
            </p>
            <p>
              Total Payments :<span className="hundred-orders"> 100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
