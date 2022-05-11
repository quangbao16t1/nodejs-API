import express from "express";
import LopController from "../controllers/lop.controller.js";

const lopRouter = express.Router();

lopRouter.get("/lop", LopController.getAllLops);
lopRouter.get("/lop/id", LopController.getLopById);
lopRouter.post("/lop", LopController.createLop);

export default lopRouter;