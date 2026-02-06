const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string().min(2).max(200).required(),
  description: Joi.string().allow("", null),
  status: Joi.string().valid("todo", "in-progress", "done").default("todo"),
  priority: Joi.string().valid("high", "medium", "low").default("medium"),
  dueDate: Joi.date().allow(null),
  category: Joi.string().allow("", null),
  tags: Joi.array().items(Joi.string()).default([]),
  color: Joi.string().allow("", null),
  recurrencePattern: Joi.string().allow("", null),
  attachments: Joi.array().items(Joi.string()).default([]),
  notes: Joi.string().allow("", null),
  timeTrackingMinutes: Joi.number().min(0).default(0)
});

module.exports = { taskSchema };
