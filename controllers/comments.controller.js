
import express from "express";
import Comment from "../models/comments.model.js";

export const getAllComments = async (req, res) => {
    const comments = await Comment.find();  
    // Logic to get all comments
    res.status(200).json({ message: "Comments retrieved successfully....123", comments });
};

export const getCommentById = async (req, res) => {
    const { id } = req.params;
    // Logic to get a specific comment by ID
    res.status(200).json({ message: `Comment with ID ${id} retrieved successfully....678` });
};