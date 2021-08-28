const path = require("path");
const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.control");

const productController = require("./controllers/product.controller");
<<<<<<< HEAD
const cartController = require("./controllers/cart.controller");
const paymentController = require("./controllers/payment.controller");
const sucessController = require("./controllers/sucess.controller");
=======

>>>>>>> 79365d427de800f6ab2c00db7f897af31d15d7a9
const app = express();
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/users", userController);
app.use("/sorting",productController)
app.use("/cart",cartController)
app.use("/checkout",paymentController)
app.use("/sucess",sucessController)
app.listen(3452, async () => {
  await connect();
  console.log("LIstening on port 3452");
});
