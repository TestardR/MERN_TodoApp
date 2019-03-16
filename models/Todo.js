const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
  action: {
    type: String,
    required: true
  }
});

//create model for todo
const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;
