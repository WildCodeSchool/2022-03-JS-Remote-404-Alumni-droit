const express = require("express");
const path = require("path");

const cors = require("cors");

const cookie = require("cookie-parser");

// let's create express app

const app = express();

// use some application-level middlewares
app.use(cookie());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router

const router = require("./router");

app.use(router);

// ready to export
module.exports = app;
