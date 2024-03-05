import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("1");
});

app.listen(3001, "0.0.0.0", () => {
  console.log("http://localhost:3001");
});
