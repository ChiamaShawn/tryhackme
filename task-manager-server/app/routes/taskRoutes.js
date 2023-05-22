const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/createTask', taskController.createTask);
router.get('/getTasks', taskController.getTasks);
router.put('/updateTask/:id', taskController.updateTask);
router.delete('/deleteTask/:id', taskController.deleteTask);

module.exports = router;