const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema(
  {
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
    reminderTime: { type: Date, required: true },
    reminderType: { type: String, enum: ["push", "local", "email"], default: "push" },
    snoozeCount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminder", reminderSchema);
