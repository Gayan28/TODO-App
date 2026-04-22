const Todo = require('../models/todo');

// GET ALL TODOS
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch todos",
      error: error.message
    });
  }
};

// CREATE TODO
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validation
    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Title is required"
      });
    }

    const todo = new Todo({ title, description });
    const saved = await todo.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create todo",
      error: error.message
    });
  }
};

// UPDATE TODO
exports.updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo",
      error: error.message
    });
  }
};

// TOGGLE DONE
exports.toggleDone = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    todo.isDone = !todo.isDone;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to toggle todo status",
      error: error.message
    });
  }
};

// DELETE TODO
exports.deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.status(200).json({
      message: "Todo deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete todo",
      error: error.message
    });
  }
};