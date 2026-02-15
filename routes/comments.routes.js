
import express from "express";
import { getAllComments, getCommentById } from "../controllers/comments.controller.js";

const routesComments = express.Router();


routesComments.get("/", getAllComments);
routesComments.get("/:id", getCommentById);

export default routesComments;

