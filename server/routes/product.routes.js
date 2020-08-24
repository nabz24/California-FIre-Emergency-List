const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/products", ProductController.index);
  app.post("/api/createNew", ProductController.createProduct);
  app.get("/api/product/:id", ProductController.findProduct);
  app.put("/api/product/edit/:id", ProductController.updateProduct);
  app.delete("/api/product/delete/:id", ProductController.deleteProduct);
};
