import { PlusIcon } from "@phosphor-icons/react";
import Button from "../components/button";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TaskState } from "../models/task";

function TasksItemsList() {
  const { tasks, isLoadingTasks } = useTasks();
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
          disabled={
            tasks.some((task) => task.state === TaskState.Creating) ||
            isLoadingTasks
          }
        >
          Nova tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem task={task} key={task.id} />)}

        {isLoadingTasks && (
          <>
            <TaskItem task={tasks[0]} loading />
            <TaskItem task={tasks[0]} loading />
            <TaskItem task={tasks[0]} loading />
            <TaskItem task={tasks[0]} loading />
          </>
        )}
      </section>
    </>
  );
}
export default TasksItemsList;
