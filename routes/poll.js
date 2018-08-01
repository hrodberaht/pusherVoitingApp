const express = require("express");
const router = express.Router();

const Pusher = require("pusher");

var pusher = new Pusher({
  appId: "570572",
  key: "9654d14527f781eda54b",
  secret: "df1713d37328218e5c20",
  cluster: "eu",
  encrypted: true
});

router.get("/", (req, res) => {
  res.send("poll");
});

router.post("/", (req, res) => {
  pusher.trigger("os-poll", "os-vote", {
    points: 1,
    os: req.body.os
  });

  return res.json({ success: true, message: "Thank you for voting" });
});

module.exports = router;
