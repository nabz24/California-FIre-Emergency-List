import React, { useEffect, useState } from "react";
import ProductForm from "../Compnents/ProductForm";
import ProductList from "../Compnents/ProductsList";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    axios.get("http://localhost:8000/api/products").then((res) => {
      setProducts(res.data);
      setLoaded(true);
    });
  };

  
  useEffect(() => {
    getData();
  }, []);

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
        <div className="col-12">
          <h2 className="display-4">Supply Kit</h2>
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
