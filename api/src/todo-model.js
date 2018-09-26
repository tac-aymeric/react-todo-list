const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  content: String,
  done: Boolean,
});

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = { 
  todoSchema,
  TodoModel,
}
