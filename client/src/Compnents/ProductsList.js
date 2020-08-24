import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const ProductList = (props) => {
  const deleteProduct = (e) => {
    e.preventDefault();
    //id = e.target.name;
    axios
      .delete("http://localhost:1234/api/product/delete/" + e.target.name)
      .then((result) => {
        props.getData();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="row pt-2">
      {props.products.map((product, index) => {
        return (
          <div className="card text-center col-sm-3">
            <div className="card-body">
              <Link to={"/product/" + product._id}>
                <h2>{product.Title}</h2>
              </Link>
              <button
                className="btn btn-warning"
                onClick={deleteProduct}
                name={product._id}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
