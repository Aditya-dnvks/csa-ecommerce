const express = require("express"); // external
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const mongoDBConnection = require("./dbConfig/config");

const url = process.env.DB_CONNECTION_URL;
mongoDBConnection(url); // MongoDB connection

const app = express();

app.use(express.json()); // Midlleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const productRoutes = require("./routes/products"); // all prodcuts routes
const cartRoutes = require("./routes/cart"); // all cart routes
const userRoutes = require("./routes/user"); // all cart routes

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));
