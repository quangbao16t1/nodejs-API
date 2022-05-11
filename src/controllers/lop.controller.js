import mongoose  from "mongoose";
import LopModel from "../models/lop.model.js";
import LopService from "../services/lop.service.js";

const LopController = {};

LopController.getAllLops = async (req, res) => {
    try {
        const lops = await LopService.getAllLOps();
        res.status(200).json({
            lops: lops,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        })
    }
}

LopController.getLopById = async(req, res) => {
    try {
        const id = req.params.id;
        const lopById = await LopService.getLopById(id);
        res.status(200).json({
            success: true,
            message: `More on ${lopById.name}`,
            lop: lopById,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

LopController.createLop = async (req, res) => {
    const lop = await LopModel.create({
           _id: mongoose.Types.ObjectId(),
           lopId: req.body.lopId,
           name: req.body.name,
           });
     return lop
           .save()
           .then((newLop) => {
                  res.status(201).json({
                         message: "create lop successfully!",
                         LopModel: newLop
                  });
           })
           .catch((error) => {
                  res.status(500).json({
                         message: "Can not created!",
                         error: error.message
                  });
           });
}

export default LopController;