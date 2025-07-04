import { useState } from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import { TrashIcon, CheckIcon, XIcon, PencilIcon } from "@phosphor-icons/react";
import InputText from "../components/input-text";
import type { Task } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
  task: Task;
}

function TaskItem(task: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task.task.satate === "creating");
  const [taskTitle, setTaskTitle] = useState("");

  function handleCgangeTastkTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  const handleEditing = () => {
    setIsEditing(true);
  };

  const handleExitEditing = () => {
    setIsEditing(false);
  };

  const handleSaveTask = () => {
    console.log({ task: task.task.id, title: taskTitle });

    setIsEditing(false);
  };
  return (
    <Card size={`md`}>
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox checked={task?.task?.concluded} icon={<CheckIcon />} />
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
