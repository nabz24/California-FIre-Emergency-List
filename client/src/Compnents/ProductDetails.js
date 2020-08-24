import React, { useEffect, useState } from "react";
import axios from "axios";

const PersonDetails = (props) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:1234/api/product/${props.id}")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>{product.Title}</h2>
      <h2>{product.Price}</h2>
      <h2>{product.Description}</h2>
    </div>
  );
};

export default PersonDetails;
