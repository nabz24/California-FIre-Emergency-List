import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Update = (props) => {
  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${props.id}`)
      .then((res) => {
        setTitle(res.data.Title);
        setPrice(res.data.Price);
        setDescription(res.data.Description);
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
      })
      .then((res) => navigate("/product/" + props.id))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form>
        <div className="form-group w-50">
          <label>Title</label>
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
        <button
          type="button"
          onClick={updateProduct}
          className="btn btn-primary"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Update;
