import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const ProductList = (props) => {
  const deleteProduct = (e) => {
    e.preventDefault();
    //id = e.target.name;
    axios
      .delete("http://localhost:8000/api/product/delete/" + e.target.name)
      .then((result) => {
        props.getData();
      })
      .catch((err) => console.log(err));
  };

  const boolConv = (e) => {
    if (e === true) {
      console.log("ddddd");
      return <h5 className="text-center text-success">Purchased</h5>;
    } else {
      return <h5 className="text-center text-danger">Not Purchased</h5>;
    }
  };

  return (
    <div className="row pt-2">
      {props.products.map((product, index) => {
        return (
          <div className="card text-center col-sm-3">
            <div className="card-body">
              <Link to={"/product/" + product._id}>
                <h2>
                  <u>{product.Title}</u>
                </h2>
              </Link>
              {boolConv(product.Purchased)}
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
