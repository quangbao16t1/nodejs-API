import express from "express";
// import { getAllSinhviens } from "../controllers/sinhvien.controller.js";
import  SinhvienController from "../controllers/sinhvien.controller.js"

const sinhvienRouter = express.Router();

sinhvienRouter.get("/sinhvien", SinhvienController.getAllSinhviens);
sinhvienRouter.get("/sinhvien/:id", SinhvienController.getSinhvienById);
sinhvienRouter.post("/sinhvien", SinhvienController.createSinhvien);
sinhvienRouter.delete("/sinhvien/:id", SinhvienController.deleteSinhvienById);
sinhvienRouter.put("/sinhvien/:id", SinhvienController.updateSinhVienById);
// sinhvienRouter.get("/sinhvien", getAllSinhviens)

export default sinhvienRouter;