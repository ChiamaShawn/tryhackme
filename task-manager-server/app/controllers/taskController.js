const Task = require('../models/task');
const mongoDb = require('../providers/mongodb');

const { collections } = require('../config');

const ObjectId = require('mongodb').ObjectId;

async function getTasks(req, res){
  try {
    const db = mongoDb.getDB();
    const tasks = await db.collection(collections.TASK_COLLECTION).find().toArray();
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}

async function createTask(req, res){
  const { data } = req.body;
  const db = mongoDb.getDB();
  try {
    const newTask = new Task(data.title, data.description);
    const taskInsert = await db.collection(collections.TASK_COLLECTION).insertOne(newTask);
    res.status(201).json(taskInsert);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

async function deleteTask(req, res){
  const taskId = req.params.id;
  const db = mongoDb.getDB();
  const filter = { 
    _id: new ObjectId(taskId)
  }
  console.log(filter);
  try {
    const taskDelete = await db.collection(collections.TASK_COLLECTION).deleteOne(filter);
    res.status(202).json(taskDelete);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

async function updateTask(req, res){
  const taskId = req.params.id;
  const { data } = req.body
  const db = mongoDb.getDB(); 
  const filter = {
    _id: new ObjectId(taskId)
  }
  const update = {
    $set: {
      title: data.title,
      description: data.description
    }
  };
  try {
    const taskUpdate = await db.collection(collections.TASK_COLLECTION).updateOne(filter, update);
    res.status(202).json(taskUpdate);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = { createTask, getTasks, updateTask, deleteTask };