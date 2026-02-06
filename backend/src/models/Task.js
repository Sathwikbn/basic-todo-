const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["todo", "in-progress", "done"], default: "todo" },
    priority: { type: String, enum: ["high", "medium", "low"], default: "medium" },
    dueDate: { type: Date },
    category: { type: String },
    tags: [{ type: String }],
    color: { type: String, default: "#4f46e5" },
    recurrencePattern: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    attachments: [{ type: String }],
    notes: { type: String },
    timeTrackingMinutes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
