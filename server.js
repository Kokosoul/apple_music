const express = require("express");
const request = require("request");
const cors = require("cors");
const app = express();
const path = require("path");

app.get("/music", cors(), async (req, res) => {
  try {
    await request.get(
      "https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/25/non-explicit.json",
      (err, response, body) => {
        if (err && response.statusCode !== 200) {
          res.status(403).send("Service Unavailable");
        } else {
          res.json(JSON.parse(body));
        }
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;
