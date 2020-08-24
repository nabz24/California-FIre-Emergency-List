import React, { useEffect, useState } from "react";
import ProductForm from "../Compnents/ProductForm";
import ProductList from "../Compnents/ProductsList";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    axios.get("http://localhost:1234/api/products").then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="col-12">
          <h2 className="display-4">Product Manager</h2>
          <ProductForm getData={getData} />
        </div>
      </div>
      <div className="container">
        <div className="col-12">
          {loaded && <ProductList products={products} getData={getData} />}
        </div>
      </div>
    </div>
  );
};

export default Main;
