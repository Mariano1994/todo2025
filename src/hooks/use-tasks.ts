import useLocalStorage from "use-local-storage";
import { type Task, TASKS_KEY } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }

  useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    isLoadingTasks,
    tasksCount: tasks.filter((task) => task.state === "created").length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}

export default useTasks;
