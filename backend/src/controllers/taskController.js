const Task = require("../models/Task");
const { taskSchema } = require("../validators/task");

const listTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });
    return res.json(tasks);
  } catch (error) {
    return next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const payload = await taskSchema.validateAsync(req.body);
    const task = await Task.create({ ...payload, userId: req.user.id });
    return res.status(201).json(task);
  } catch (error) {
    return next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const payload = await taskSchema.validateAsync(req.body);
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      payload,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(task);
  } catch (error) {
    return next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

module.exports = { listTasks, createTask, updateTask, deleteTask };
