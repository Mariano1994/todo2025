import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY } from "../models/task";

function useTasks() {
  const [tasks] = useLocalStorage<Task[]>("tasks", []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}

export default useTasks;
