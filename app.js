import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());   

connectDB();

// default route
app.get("/", (req, res) => {
  res.send("Welcome to the Task Tracker API.");
});

export default app;


