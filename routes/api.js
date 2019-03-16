const express = require('express');
const router = express.Router();

// Load models
const Todo = require('../models/Todo');

// @route   GET api/todos
// @desc    Get todos
router.get('/todos', (req, res) => {
  Todo.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

// @route  POST api/todos
// @desc   POST a todo
router.post('/todos', (req, res) => {
  const newTodo = new Todo({
    action: req.body.action
  });

  newTodo
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

// @route DELETE api/todos/:id
// @desc   DELETE a todo
router.delete('/todos/:id', (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

// @route  GET api/todos/:id
// @desc   GET a todo
router.get('/todos/:id', (req, res) => {
  Todo.findById({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

// @route  PUT api/todos/:id
// @desc   PUT a todo
router.put('/todos/:id', (req, res) => {
  let newData = { action: req.body.action };
  Todo.findByIdAndUpdate(req.params.id, { $set: newData })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
