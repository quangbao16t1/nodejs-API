import express from "express";
import TodoController from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/todo",(req, res) =>  TodoController.getAllTodos());

export default router;             