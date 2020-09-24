const express = require("express");
const router = express.Router();
const { createTasks, findAllTasks, findByIdTask, deleteTask, updateTask } = require("../controllers/TaskController");

// Route for found all tasks
router.get('/api/tasks', findAllTasks);

// Route for created tasks
router.post('/api/create', createTasks);

// Route for find for id
router.get('/api/tasks/:id', findByIdTask);

// Route for deleted one task for id
router.delete('/api/tasks/:id', deleteTask);

// Route for update one task for id
router.put('/api/tasks/:id', updateTask);

module.exports = router;