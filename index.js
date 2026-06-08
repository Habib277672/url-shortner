const express = require('express');
const path = require('path');
const { connectMongoDB } = require('./connection');
const cookieParser = require('cookie-parser')

// Middlewares Import
const { checkForAuthentication, restrictTo } = require('./middlewares/auth')

const app = express();
const PORT = 8000;

// All Routes
const urlRoutes = require('./routes/url');
const serverRoute = require('./routes/serverRoute');
const userRoute = require("./routes/user")

connectMongoDB("mongodb://localhost:27017/url-shortner").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(checkForAuthentication)

app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoutes);
app.use("/user", userRoute);
app.use("/", serverRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});