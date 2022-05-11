import mongoose from 'mongoose';
import LopModel from '../models/lop.model.js';

const LopService = {};

LopService.getAllLOps = async () => {
    return await LopModel.find({});
}

LopService.getLopById = async (lopId) => {
    return await LopModel.findById(lopId);
}

// LopService.createLop = async (lop) => {
//     return await LopModel.insertMany()
// }

export default LopService;