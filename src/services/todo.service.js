import TodoModel from "../models/todo.model.js"

const TodoService = {};

TodoService.getAllTodos = async () => {
       return await TodoModel.find({});
}

export default TodoService;