import express from "express";
import todoRouter from "./todo.routes.js"
import sinhvienRouter from "./sinhvien.routes.js";
import sinhvienModel from "../models/sinhvien.model.js";

const apiRouter = express();

apiRouter.use("/todo", todoRouter);

apiRouter.use("/sinhvien", sinhvienRouter)

export default apiRouter;
