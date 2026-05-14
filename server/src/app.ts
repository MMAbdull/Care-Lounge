import express from "express";
import v1Router from "./api/v1/index.js";

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
  res.send("Care Lounge Api Running");
});

app.use("/api/v1",v1Router);

export default app;