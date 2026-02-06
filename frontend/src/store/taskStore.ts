import { create } from "zustand";

export type Task = {
  id: string;
  title: string;
  category: string;
  priority: "high" | "medium" | "low";
};

type TaskState = {
  tasks: Task[];
};

export const useTaskStore = create<TaskState>(() => ({
  tasks: [
    { id: "1", title: "Review sprint goals", category: "Planning", priority: "high" },
    { id: "2", title: "Draft release notes", category: "Docs", priority: "medium" },
    { id: "3", title: "Sync with design", category: "Collab", priority: "low" }
  ]
}));
