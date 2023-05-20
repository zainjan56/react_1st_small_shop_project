import React, { useState } from "react";
import "./Form.css";

export default function Main(props) {
  const [data, setData] = useState({
    custname: "",
    product: "",
    rprice: "",
    discount: "",
  });

  const changeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const allData = {
      custname: data.custname,
      product: data.product,
      rprice: data.rprice,
      discount: data.discount,
    };

    props.onSaveExpenseData(allData);
    setData({ custname: "", product: "", rprice: "", discount: "" });
  };

  const resetHandler = () => {
    setData({ custname: "", product: "", rprice: "", discount: "" });
  };
  return (
    <main className="container-fluid">
      <h2>Five Star General Store</h2>

      <div className="row">
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Customer Name</label>
              <input
                type="text"
                name="custname"
                className="form-control"
                id="inputEmail4"
                placeholder="Full Name"
                onChange={changeHandle}
                value={data.custname}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">Product Name</label>
              <select
                id="inputState"
                name="product"
                className="form-control"
                onChange={changeHandle}
                value={data.product}
              >
                <option selected>Choose...</option>
                <option>Rookh Afza</option>
                <option>Milk</option>
                <option>Sugar</option>
                <option>Tea</option>
                <option>Pepsi</option>
                <option>Pumper</option>
                <option>Ice Cream</option>
                <option>7up</option>
                <option>Apple</option>
                <option>Mango</option>
                <option>Chew gum</option>
                <option>Biscet</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Relative Price</label>
              <input
                type="text"
                name="rprice"
                className="form-control"
                id="inputPassword4"
                placeholder="Relative Price"
                onChange={changeHandle}
                value={data.rprice}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Discount</label>
              <input
                type="text"
                name="discount"
                className="form-control"
                id="inputPassword4"
                placeholder="Discount"
                onChange={changeHandle}
                value={data.discount}
              />
            </div>
          </div>
          <div>
            <button className="btn1" type="submit">
              Add to Cart
            </button>
            <button className="btn1" type="reset" onClick={resetHandler}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
