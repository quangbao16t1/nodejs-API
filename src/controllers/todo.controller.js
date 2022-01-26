import TodoService from "../services/todo.service.js";

const TodoController = {};

TodoController.getAllTodos = async (req, res) => {
       try {
              const todos = await TodoService.getAllTodos();
              res.status(200).json({
                     todos: todos,
              });
       } catch (error) {
              res.status(400).json({
                     error: error.message,
              });
       }
};

export default TodoController;