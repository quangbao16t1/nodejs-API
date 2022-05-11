import express from "express";
import todoRouter from "./todo.routes.js"
import sinhvienRouter from "./sinhvien.routes.js";
import lopRouter from "./lop.routes.js";

const apiRouter = express();

apiRouter.use("/todo", todoRouter);

apiRouter.use("/sinhvien", sinhvienRouter);

apiRouter.use("/lop", lopRouter);

export default apiRouter;
