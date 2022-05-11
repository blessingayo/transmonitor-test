import React from "react";
import chart from "../../images/chart.svg";
import "../../styling/Card.css";
const Card = () => {
  return (
    <div>
      <div className="container-fluid  px-4">
        <div className="row g-3  my-2  w-auto">
          <div className="col-md-3">
            <div className="p-3  bg-white  shadow-sm  d-flex  justify-content-around  align-items-center  rounded">
              <div className="d-flex">
                <div>
                  <p className="fs-8">Daily Transaction Volume</p>
                  <h3 className="fs-4"> 2,342</h3>
                </div>

                <div>
                  <img className="chart-pic" src={chart} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3  bg-white  shadow-sm  d-flex  justify-content-around  align-items-center  rounded">
              <div className="d-flex">
                <div>
                  <p className="fs-8">Daily Transaction Value</p>
                  <h3 className="fs-4"> N4,000,000</h3>
                </div>

                <div>
                  <img className="chart-pic" src={chart} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3  bg-white  shadow-sm  d-flex  justify-content-around  align-items-center  rounded">
              <div className="d-flex">
                <div>
                  <p className="fs-8">Total Transaction Volume</p>
                  <h3 className="fs-4"> N452,000</h3>
                </div>

                <div>
                  <img className="chart-pic" src={chart} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3  bg-white  shadow-sm  d-flex  justify-content-around  align-items-center  rounded">
              <div className="d-flex">
                <div>
                  <p className="fs-12">Total Transaction Value</p>
                  <h3 className="fs-4"> N4,000,000</h3>
                </div>

                <div>
                  <img className="chart-pic" src={chart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
