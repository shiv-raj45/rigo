require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");
const { creds, urls } = require("./config");
const { attendence } = require("./src/attendence");
const { mailSender } = require("./src/service/mailSender");
const { signin } = require("./src/signin");
const app = express();
const port = process.env.PORT || 5000;

app.get("/rigo/clockin", async (req, res) => {
  const signinData = await signin(creds);
  const token = signinData?.Data?.Token;
  const clockInData = await attendence(token, true);
  mailSender("Clock In Data of today", clockInData);
  res.send(clockInData);
});

app.get("/rigo/clockout", async (req, res) => {
  const signinData = await signin(creds);
  const token = signinData?.Data?.Token;
  const clockOutData = await attendence(token, false);
  mailSender("Clock out Data of today", clockOutData);

  console.log("clockOutData", clockOutData);
  res.send(clockOutData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
