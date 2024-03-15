import express from "express";
import { pool } from "./models/db";

const app = express();

app.get("/", (req, res) => {
  pool;
  res.send("1");
});

app.listen(3001, "0.0.0.0", () => {
  console.log("http://localhost:3001");
});
