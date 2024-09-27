// const express = require("express");
// const axios = require("axios");
import express from "express";
import axios from "axios";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();
const port = 5000;

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/testProxy",
  proxy("https://test-18d-dev-ed.develop.my.salesforce.com")
);

app.post("/proxy/token", async (req, res) => {
  // console.log("body is - ", req.body);

  try {
    const response = await axios.post(
      "https://test-18d-dev-ed.develop.my.salesforce.com/services/oauth2/token",
      req.body,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    // console.log(response);

    res.json(response.data);
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .json(error.response ? error.response.data : error.message);
  }
});

app.get("/proxy/api", async (req, res) => {
  // console.log("body is - ", req.query);

  console.log(req.params);

  try {
    const { accessToken } = req.query;

    const response = await axios.get(
      "https://test-18d-dev-ed.develop.my.salesforce.com/services/data/v52.0/query",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: "SELECT COUNT() FROM Account",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .json(error.response ? error.response.data : error.message);
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
