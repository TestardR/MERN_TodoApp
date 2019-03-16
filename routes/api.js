const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// @route   GET api/todos
// @desc    Get todos
router.get('/todos', (req, res, next) => {
  Todo.find()
    .then(data => res.json(data))
    .catch(netxt);
});

// @route  POST api/todos
// @desc   POST a todo
router.post('/todos', (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then(cata => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty'
    });
  }
});

// @route DELETE api/todos/:id
// @desc   DELETE a todo
router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next);
});

// @route  GET api/todos/:id
// @desc   GET a todo
router.get('/todo/:id', (req, res, next) => {
  Todo.findById({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next);
});

// @route  PUT api/todos/:id
// @desc   PUT a todo
router.put('/todo/:id', (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, { $set: req.body.action })
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;
