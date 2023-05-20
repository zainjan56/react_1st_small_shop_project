import React from "react";
import "./Product.css";
import Form from "./Form";

export default function Product(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const totDiscount =
      (enteredExpenseData.rprice * enteredExpenseData.discount) / 100;
    const sprice = enteredExpenseData.rprice - totDiscount;
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
      saleprice: sprice,
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="product">
      <Form onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
