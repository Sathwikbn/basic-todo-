import { Storage } from "@capacitor/storage";

const TASK_CACHE_KEY = "offline_tasks";

export const saveOfflineTasks = async (tasks: unknown) => {
  await Storage.set({
    key: TASK_CACHE_KEY,
    value: JSON.stringify(tasks)
  });
};

export const loadOfflineTasks = async <T>() => {
  const { value } = await Storage.get({ key: TASK_CACHE_KEY });
  return value ? (JSON.parse(value) as T) : null;
};
