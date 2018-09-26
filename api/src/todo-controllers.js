const { BadRequest } = require('http-errors');

const { TodoModel } = require('./todo-model');

async function create(req) {
  const todo = req.body;

  const created = new TodoModel(todo);
  await created.save();

  return created;
}

async function retrieve(req) {
  const todos = await TodoModel.find().lean();
  return todos;
}

async function update(req) {
  console.log('debug', req.params._id);
  return TodoModel.findOneAndUpdate({
    _id: req.params.id,
  }, req.body, { 
    new: true
  });
}

module.exports = {
  create, retrieve, update,
};
