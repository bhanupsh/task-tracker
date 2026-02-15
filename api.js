import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());   

// default route
app.get("/", (req, res) => {
  res.send("Welcome to the Task Tracker API.....3434343.");
});

export default app;


