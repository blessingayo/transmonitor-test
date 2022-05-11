import React from "react";
import { RiArrowDropDownLine  } from "react-icons/ri/";
import {   BsDot } from "react-icons/bs";
import {AiOutlineDownSquare} from "react-icons/ai"
import "../../styling/Table.css";
import tableImage from "../../images/tableImage.svg"
// import SearchIcon from "@material-ui/icons/Search";

const Table = () => {
  return (
    <div>
      <div className="row mt-5 px-3">
        <div className="row col-12 mb-4  px-4">
          <div className="col-md-8">
            <h2>Payments</h2>
            <div className="d-flex align-items-center gap-5   first-con">
              <p>
                Showing
                <span className="m-2">
                  20 <RiArrowDropDownLine /> out of 500 payments
                </span>
              </p>
              <div className="search-con">
                <i className="fa-solid fa-magnifying-glass  search-contain"></i>
                <input
                  className="search-space"
                  type="text"
                  placeholder="Search payments"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-end gap-2 pb-3  second-con">
            <span>Show</span>
            <select>
              <option>All</option>
              <option>Reconciled</option>
              <option>Un-Reconciled</option>
              <option>Settled</option>
              <option>Unsettled</option>
            </select>
          </div>
        </div>

        <div className="col   third-con">
          <table className="table bg-white  rounded shadow-sm table-hover  ">
            <thead className=" shadow-medium  table-header">
              <tr>
                <th scope="col" width="50">
                  
                </th>
                <th scope="col">Item type</th>
                <th scope="col">Price</th>
                <th scope="col">Transaction No</th>
                <th scope="col">Time</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr className=" table-content">
                <th scope="row"><img className="table-image"  src={ tableImage} /></th>
                <td>Apple Mac Book 15” 250 SSD 12GB</td>
                <td>$73430</td>
                <td>1234567890</td>
                <td>12:30</td>
               <td> <button  className="table-button-reconciled"  type="button"><BsDot />
                  Reconciled
                </button></td>
                <td><AiOutlineDownSquare   className="btn-dropdown"/></td>
              </tr>

              <tr className=" table-content">
                <th scope="row"><img  className="table-image" src={ tableImage} /></th>
                <td>Apple Mac Book 15” 250 SSD 12GB</td>
                <td>$73430</td>
                <td>1234567890</td>
                <td>12:30</td>
              <td> <button className="table-button-pending" type="button"><BsDot />
                  Pending
                </button></td>
                <td><AiOutlineDownSquare  className="btn-dropdown" /></td>
              </tr>

              <tr className=" table-content">
                <th scope="row"><img className="table-image"  src={ tableImage} /></th>
                <td>Apple Mac Book 15” 250 SSD 12GB</td>
                <td>$73430</td>
                <td>1234567890</td>
                <td>12:30</td>
                <td><button  className="table-button-reconciled"  type="button"><BsDot />
                  Reconciled
                </button></td>
                <td><AiOutlineDownSquare  className="btn-dropdown" /></td>
              </tr>

              <tr className=" table-content">
                <th scope="row"><img className="table-image" src={ tableImage} /></th>
                <td>Apple Mac Book 15” 250 SSD 12GB</td>
                <td>$73430</td>
                <td>1234567890</td>
                <td>12:30</td>
                <td><button  className="table-button-reconciled" type="button"><BsDot />
                  Reconciled
                </button></td>
                <td><AiOutlineDownSquare   className="btn-dropdown"/></td>
              </tr>

              <tr className=" table-content">
                <th scope="row"><img  className="table-image"  src={ tableImage} /></th>
                <td>Apple Mac Book 15” 250 SSD 12GB</td>
                <td>$73430</td>
                <td>1234567890</td>
                <td>12:30</td>
               <td><button className="table-button-pending" type="button"><BsDot />
                  Pending
                </button></td> 
                <td><AiOutlineDownSquare   className="btn-dropdown"/></td>
              </tr>

              <tr className=" table-content">
                <th scope="row"><img className="table-image"  src={ tableImage} /></th>
                <td>Apple Mac Book 15” 250 SSD 12GB</td>
                <td>$73430</td>
                <td>1234567890</td>
                <td>12:30</td>
                <td><button className="table-button-unreconciled " type="button"><BsDot />
                 Un-reconciled
                </button></td>
                <td><AiOutlineDownSquare   className="btn-dropdown"/></td>
              </tr>

              <tr className=" table-content">
                <th scope="row"><img  className="table-image"  src={ tableImage} /></th>
                <td>Apple Mac Book 15” 250 SSD 12GB</td>
                <td>$73430</td>
                <td>1234567890</td>
                <td>12:30</td>
               <td> <button  className="table-button-reconciled" type="button"><BsDot />
                  Reconciled
                </button>
                </td>
                <td><AiOutlineDownSquare   className="btn-dropdown"/></td>
              </tr>

              <tr className=" table-content">
                <th scope="row"><img  className="table-image"  src={ tableImage} /></th>
                <td>Apple Mac Book 15” 250 SSD 12GB</td>
                <td>$73430</td>
                <td>1234567890</td>
                <td>12:30</td>
               <td> <button className="table-button-unreconciled " type="button"><BsDot />
                  Un-reconciled
                </button></td>
                <td><AiOutlineDownSquare  className="btn-dropdown"/></td>
              </tr>

              <tr className=" table-content">
                <th scope="row"><img className="table-image" src={ tableImage} /></th>
                <td>Apple Mac Book 15” 250 SSD 12GB</td>
                <td>$73430</td>
                <td>1234567890</td>
                <td>12:30</td>
                <td><button className="table-button-pending" type="button"><BsDot />
                 Pending
                </button></td>

                <td><AiOutlineDownSquare className="btn-dropdown" /></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
