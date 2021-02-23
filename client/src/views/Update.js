import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Update = (props) => {
  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Purchased, setPurchase] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${props.id}`)
      .then((res) => {
        setTitle(res.data.Title);
        setPrice(res.data.Price);
        setDescription(res.data.Description);
        setPurchase(res.data.Purchased);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/edit/${props.id}`, {
        Title,
        Price,
        Description,
        Purchased,
      })
      .then((res) => navigate("/product/" + props.id))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid bg-light " style={{ height: "100vh" }}>
      <div className="row bg-warning text-dark p-2 mb-5">
        <div className="container mx-auto text-center">
          <h1
            className="text-center align-middle"
            style={{
              display: "inline-block",
            }}
          >
            California Fire Emergency List
          </h1>
        </div>
      </div>
      <div className="container">
        <form>
          <div className="form-group w-50">
            <label>Item</label>
            <input
              type="text"
              className="form-control"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group w-50">
            <label>Price</label>
            <input
              type="text"
              className="form-control"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group w-50">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group w-50">
            <input
              type="checkbox"
              id="purchase"
              onChange={(e) => setPurchase(e.target.checked)}
              checked={Purchased}
            ></input>{" "}
            Purchased
          </div>
          <button
            type="button"
            onClick={updateProduct}
            className="btn btn-primary"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
