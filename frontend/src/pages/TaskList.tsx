import { useTaskStore } from "../store/taskStore";

const TaskList = () => {
  const { tasks } = useTaskStore();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Task List</h2>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-2xl bg-slate-900 p-4"
          >
            <div>
              <p className="text-sm font-semibold">{task.title}</p>
              <p className="text-xs text-slate-400">{task.category}</p>
            </div>
            <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-200">
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
