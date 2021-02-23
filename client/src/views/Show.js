import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Show = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + props.id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (e) => {
    e.preventDefault();
    axios
      .delete("http://localhost:8000/api/product/delete/" + props.id)
      .then((result) => {
        console.log(result);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  const boolConv = (e) => {
    if (e === true) {
      console.log("ddddd");
      return <h3 className="text-center text-success">Purchased</h3>;
    } else {
      return <h3 className="text-center text-danger">Not Purchased</h3>;
    }
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
      <div className="container text-center p-2">
        <h2 className="text-center">Item: {product.Title}</h2>
        <h3 className="text-center">Quantity: {product.Price}</h3>
        <h3 className="text-center">Description: {product.Description}</h3>
        {boolConv(product.Purchased)}
        <Link to={"/product/edit/" + product._id}>
          <button className="btn p-2 m-2 btn-success">Edit Product</button>
        </Link>
        <Link to={"/products"}>
          <button className="btn p-2 m-2 btn-primary">Go Back</button>
        </Link>
        <button className="btn p-2 m-2 btn-danger" onClick={deleteProduct}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Show;
