import mongoose from "mongoose";

const schema = mongoose.Schema;

const sinhvienModel = new schema({
       _id: mongoose.Schema.Types.ObjectId,
       mssv: {
              type: Number,
              required: true
       },
       name: {
              type: String,
              required: true
       },
       lopId: {
              type: Number,
              required: true
       }
});

const SinhvienModel = mongoose.model("sinhviens", sinhvienModel);

export default SinhvienModel;
