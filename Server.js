// server.js
const express = require("express");
const app = express();

// allow any origin (public endpoint). Remove or restrict in production.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const data = require("./SingleEngagementView10.JSON");

// route that returns the JSON
app.get("/api/single-engagement-view", (req, res) => {
  // disable caching — makes testing easier and avoids CDN quirks
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.json(data);
});

// simple root route to show service is alive
app.get("/", (req, res) => res.send("Dummy API: /api/single-engagement-view"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
