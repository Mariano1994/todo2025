import { PlusIcon } from "@phosphor-icons/react";
import Button from "../components/button";
import TaskItem from "./task-item";

function TasksItemsList() {
  return (
    <>
      <section>
        <Button icon={<PlusIcon />} className="w-full">
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
