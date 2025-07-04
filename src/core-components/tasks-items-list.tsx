import { PlusIcon } from "@phosphor-icons/react";
import Button from "../components/button";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";

function TasksItemsList() {
  const { tasks } = useTasks();

  const { prepareTask } = useTask();

  function handleCreateTask() {
    prepareTask("marinao");
  }

  console.log(tasks);
  return (
    <>
      <section>
        <Button
          icon={<PlusIcon />}
          className="w-full"
          onClick={handleCreateTask}
        >
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
export default TasksItemsList;
