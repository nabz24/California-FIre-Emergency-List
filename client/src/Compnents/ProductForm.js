import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const ProductForm = (props) => {
  const [Title, setProductName] = useState("");
  const [Price, setPrice] = useState(0);
  const [Description, setDescription] = useState("");
  const [Purchased, setPurchase] = useState(false);

  const createData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/createNew", {
        Title,
        Price,
        Description,
        Purchased,
      })
      .then((res) => {
        console.log(res.data);
        props.getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <div className="form-group w-50">
          <label>Item</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group w-50">
          <label>Quantity</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group w-50">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group w-50">
          <input
            type="checkbox"
            id="purchase"
            onChange={(e) => setPurchase(e.target.checked)}
          ></input>{" "}
          Purchased
        </div>
        <button className="btn btn-warning" onClick={createData}>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
