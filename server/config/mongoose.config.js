const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/productManager", {
    useNewUrlParser: true,
    useInifiedTopology: true,
  })
  .then(() => console.log("Established connection with database"))
  .catch((err) =>
    console.log("SOmething went with connecting to the dataabse", err)
  );
