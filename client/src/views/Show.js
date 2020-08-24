import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Show = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:1234/api/product/" + props.id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (e) => {
    e.preventDefault();
    axios
      .delete("http://localhost:1234/api/product/delete/" + props.id)
      .then((result) => {
        console.log(result);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h2 className="text-center">Title: {product.Title}</h2>
      <h3 className="text-center">Price: {product.Price}</h3>
      <h3 className="text-center">Description: {product.Description}</h3>
      <Link to={"/product/edit/" + product._id}>
        <button className="btn btn-warning">Edit Product</button>
      </Link>
      <Link to={"/products"}>
        <button className="btn btn-warning">Go Back</button>
      </Link>
      <button className="btn btn-warning" onClick={deleteProduct}>
        Delete
      </button>
    </div>
  );
};

export default Show;
