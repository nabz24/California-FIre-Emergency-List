const { Product } = require("../models/product.model");
const { request } = require("express");

// find certain product
module.exports.index = (req, res) => {
  Product.find().then((allProd) => res.json(allProd));
};

// create product
module.exports.createProduct = (req, res) => {
  const { Title, Price, Description, Purchased } = req.body;
  //console.log(productName, price, description);
  Product.create({
    Title,
    Price,
    Description,
    Purchased,
  })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

//find product
module.exports.findProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

//edit product
module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((updatedPerson) => res.json(updatedPerson))
    .catch((err) => console.log(err));
};

// delete product
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};
