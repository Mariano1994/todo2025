import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Adds a new task with the given title to the list of tasks. The new task is
   * set to the "Creating" state, and the rest of the tasks remain unchanged.
   *
   * @param task - The title for the new task.
/*******  d161a745-ace4-4623-a419-e8e68ff15cd2  *******/
  function prepareTask(task: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: task,
        concluded: false,
        satate: TaskState.Creating,
      },
    ]);
  }

  return {
    prepareTask,
  };
}

export default useTask;
