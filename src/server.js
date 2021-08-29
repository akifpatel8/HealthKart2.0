const path = require("path");
const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.control");
const trendControl = require("./controllers/trend.control");
const productController = require("./controllers/product.controller");
const cartController = require("./controllers/cart.controller");
const paymentController = require("./controllers/payment.controller");
const sucessController = require("./controllers/sucess.controller");
const searchController = require("./controllers/searchQuery.controller");
const signupController = require("./controllers/signup.controller");
const loginController = require("./controllers/login.control");

const itemController = require("./controllers/items.control");
const app = express();
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/users", userController);
app.use("/trend", trendControl);
app.use("/sorting", productController);
app.use("/cart", cartController);
app.use("/checkout", paymentController);
app.use("/sucess", sucessController);
app.use("/users",searchController)
app.use("/login",loginController)
app.use("/signup",signupController)


app.use("/items", itemController);
app.listen(3452, async () => {
  await connect();
  console.log("LIstening on port 3452");
});
