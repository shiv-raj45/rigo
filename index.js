require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");
const { creds, urls } = require("./config");
const { attendence } = require("./src/attendence");
const { signin } = require("./src/signin");
const app = express();
const port = process.env.PORT || 3000;

app.get("/rigo/clockin", async (req, res) => {
  const signinData = await signin(creds);
  const token = signinData?.Data?.Token;
  const clockInData = await attendence(token, true);
  res.send(clockInData);
});

app.get("/rigo/clockout", async (req, res) => {
  const signinData = await signin(creds);
  const token = signinData?.Data?.Token;
  const clockOutData = await attendence(token, false);
  console.log("clockOutData", clockOutData);
  res.send(clockOutData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
