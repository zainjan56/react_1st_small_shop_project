import React, { useState } from 'react';
import Show from './Show';
import Product from './newProduct/Product';

let DUMMY_EXPENSE = [
  
];

export default function App() {

  const [allData, setallData] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...allData];
    setallData(updatedExpense);
    
  }
  return (
    <div>
      <Product onAddExpense={addExpenseHandler} />
      <br></br>
      <div><h1 style={{
        textDecoration: "none", borderRadius: "50px", backgroundColor: "rgb(175, 221, 206)",
        boxShadow: "15px 15px 15px rgb(0 0 0 / 0.2)"
      }}>Customers Records</h1></div>
      <div className='container'>

        <Show item={allData} />
      </div>
    </div>
  )
}
