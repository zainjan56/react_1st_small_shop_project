import React from "react";
import "./Show.css";

export default function Show(props) {
  const printHandle = () => {
    window.print();
  };

  return (
    <div>
      <div>
        {props.item.map((expense) => (
          <div className="container-fluid">
            <div className="show">
            <div className="title">Customer Data</div>
            <h6>Customer Name: {expense.custname}</h6>
            <h6>Product Name: {expense.product}</h6>
            <h6>Relative Price: {expense.rprice}</h6>
            <h6>Discount: {expense.discount}%</h6>
            <h6>Sale Price: {expense.saleprice}</h6>
            <button className="buttons" onClick={printHandle}>
              Print
            </button>
            <button className="buttons">Cancel</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
