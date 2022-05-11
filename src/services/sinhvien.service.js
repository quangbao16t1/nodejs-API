import mongoose from "mongoose";
import SinhvienModel from "../models/sinhvien.model.js";

const SinhvienService = {};

SinhvienService.getAllSinhviens = async () => {
       return await SinhvienModel.find({});
}

// SinhvienService.createSinhvien = async () => {
//        return await SinhvienModel.create({});
// }

SinhvienService.deleteSinhvienById = async (id) => {
       return await SinhvienModel.findByIdAndRemove(id);
}

SinhvienService.getSinhvienById = async (id) => {
       return await SinhvienModel.findById(id);
}

SinhvienService.updateSinhVienById = async(id, sinhvien) => {
       return await SinhvienModel.findByIdAndUpdate(id, sinhvien);
}
export default SinhvienService;