import SinhvienService from "../services/sinhvien.service.js";
import SinhvienModel from "../models/sinhvien.model.js";
import mongoose from "mongoose";

const SinhvienController = {};

SinhvienController.getAllSinhviens = async (req, res) => {
       try {
              const sinhviens = await SinhvienService.getAllSinhviens();
              res.status(200).json({
                     sinhviens: sinhviens,
              });
       } catch (error) {
              res.status(400).json({
                     error: error.message,
              });
       }
};

SinhvienController.getSinhvienById = async (req, res) => {
       try {
              const id = req.params.id;
              const sinhvien = await SinhvienService.getSinhvienById(id);
              res.status(200).json({
                     success: true,
                     message: `More on ${sinhvien.name}`,
                     sinhvien: sinhvien,
                     });
       } catch (error) {
              res.status(500).json({
                     error: error.message,
              });
       }
}

// SinhvienController.createSinhvien = async (req, res) => {
       
//        try {
//               const sinhvien = await SinhvienModel.create({
//                      _id: mongoose.Types.ObjectId(),
//                      mssv: req.body.mssv,
//                      name: req.body.name,
//                      lopId: req.body.lopId
//                      });
//               if(sinhvien) {
//                      res.status(201).json({
//                             message: "create sinh vien successfully!",
//                      });
//               }
//        } catch (error) {
//               res.status(500).json({
//                      message: "Can not created!",
//                      error: error.message
//               });
//        }
// }

SinhvienController.createSinhvien = async (req, res) => {
       const sinhvien = await SinhvienModel.create({
              _id: mongoose.Types.ObjectId(),
              mssv: req.body.mssv,
              name: req.body.name,
              lopId: req.body.lopId
              });
        return sinhvien
              .save()
              .then((newSinhvien) => {
                     res.status(201).json({
                            message: "create sinh vien successfully!",
                            SinhvienModel: newSinhvien
                     });
              })
              .catch((error) => {
                     res.status(500).json({
                            message: "Can not created!",
                            error: error.message
                     });
              });
}

export default SinhvienController;

// export const getAllSinhviens = (req, res) => {
//        SinhvienModel.find()
//               .select('_id mssv name lopId')
//               .then((allcourses) => {
//                      console.log(res +"adasdas");
//                      res.status(200).json({
//                      success: true,
//                      message: "List !",
//                      SinhvienModel: allcourses,
//                      });
//               })
//               .catch((err) => {
//                      console.log(err);
//                      res.status(500).json({
//                             success: false,
//                             message: "Get List  failed",
//                             error: err.message,
//                      });
//               });
// };
