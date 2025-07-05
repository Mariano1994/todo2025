import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import { useState } from "react";

function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdatingTask, setUpdatingTask] = useState(false);
  const [isDeletingTask, setDeletingTask] = useState(false);

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

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setUpdatingTask(true);
    await delay(1000);

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task
      )
    );
    setUpdatingTask(false);
  }

  function updateTaskStatus(id: string, conclued: boolean) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, concluded: conclued } : task
      )
    );
  }

  async function deletetask(id: string) {
    setDeletingTask(true);
    await delay(1000);
    setTasks(tasks.filter((task) => task.id !== id));

    setDeletingTask(false);
  }
  return {
    updateTask,
    prepareTask,
    updateTaskStatus,
    deletetask,
    isUpdatingTask,
    isDeletingTask,
  };
}

export default useTask;
