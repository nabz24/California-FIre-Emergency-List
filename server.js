const express = require("express");
const cors = require("cors");
const app = express();
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json());
app.use(express.json(), express.urlencoded({ extended: true }));
require("./server/routes/product.routes")(app);

app.listen(1234, () => {
  console.log("Listening at Port 1234");
});
