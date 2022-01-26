import mongoose from "mongoose";

const shema = mongoose.Schema;

const todoSchema = new shema({
       _id: mongoose.Schema.Types.ObjectId,
       name: {
              type: String,
              required: true,
       },
       decription: {
              type: String,
              required: true,
       },
});

const TodoModel = mongoose.model("Todos", todoSchema);
export default TodoModel;
