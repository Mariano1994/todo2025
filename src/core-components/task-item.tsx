import { useState } from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import { TrashIcon, CheckIcon, XIcon, PencilIcon } from "@phosphor-icons/react";
import InputText from "../components/input-text";
import type { Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemProps {
  task: Task;
}

function TaskItem(task: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task.task.state === "creating");
  const [taskTitle, setTaskTitle] = useState(task.task.title || "");

  const { updateTask, updateTaskStatus } = useTask();

  function handleCgangeTastkTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }

  const handleEditing = () => {
    setIsEditing(true);
  };

  const handleExitEditing = () => {
    setIsEditing(false);
  };

  const handleSaveTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTask(task.task.id, { title: taskTitle });
    setIsEditing(false);
  };

  const handleUpdateTaskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    updateTaskStatus(task.task.id, checked);
  };
  return (
    <Card size={`md`}>
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            icon={<CheckIcon />}
            onChange={handleUpdateTaskStatus}
            value={task?.task?.concluded.toString()}
          />
          <Text
            className={cx("flex-1", { "line-through": task?.task?.concluded })}
          >
            {task?.task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon variant={"tertiary"} icon={<TrashIcon />} />
            <ButtonIcon
              variant={"tertiary"}
              icon={<PencilIcon />}
              onClick={handleEditing}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            size={"md"}
            className="flex-1"
            onChange={handleCgangeTastkTitle}
            required
            autoFocus
            value={taskTitle}
          />
          <div className="flex gap-2">
            <ButtonIcon
              variant={"secondary"}
              icon={<XIcon className="text-pink-base" />}
              onClick={handleExitEditing}
              type="button"
            />
            <ButtonIcon
              type="submit"
              variant={"primary"}
              icon={<CheckIcon />}
            />
          </div>
        </form>
      )}
    </Card>
  );
}

export default TaskItem;
