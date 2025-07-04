import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: "",
        concluded: false,
        state: TaskState.Creating,
      },
    ]);
  }

  function updateTask(id: string, payload: { title: Task["title"] }) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task
      )
    );
  }

  function updateTaskStatus(id: string, conclued: boolean) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, concluded: conclued } : task
      )
    );
  }

  function deletetask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return {
    updateTask,
    prepareTask,
    updateTaskStatus,
    deletetask,
  };
}

export default useTask;
