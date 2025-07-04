import { PlusIcon } from "@phosphor-icons/react";
import Button from "../components/button";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TaskState } from "../models/task";

function TasksItemsList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();
  function handleCreateTask() {
    prepareTask();
  }
  return (
    <>
      <section>
        <Button
          icon={<PlusIcon />}
          className="w-full"
          onClick={handleCreateTask}
          disabled={tasks.some((task) => task.satate === TaskState.Creating)}
        >
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </section>
    </>
  );
}
export default TasksItemsList;
