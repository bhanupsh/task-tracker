import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import routesComments from "./routes/comments.routes.js";

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());   

// default route
app.get("/", (req, res) => {
  res.send("Welcome to the Task Tracker API.");
});

// Routes
app.use("/comments", routesComments);

export default app;


