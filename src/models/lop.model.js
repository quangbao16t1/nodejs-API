import mongoose from "mongoose";

const schema = mongoose.Schema;

const lopModel = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    lopId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const LopModel = mongoose.model("lops", lopModel);

export default LopModel;