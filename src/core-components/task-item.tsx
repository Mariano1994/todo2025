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
import Skeleton from "../components/skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === "creating");
  const [taskTitle, setTaskTitle] = useState(task?.title || "");

  const { updateTask, updateTaskStatus, deletetask } = useTask();

  function handleCgangeTastkTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }

  const handleEditing = () => {
    setIsEditing(true);
  };

  const handleExitEditing = () => {
    if (task?.state === "creating") {
      deletetask(task?.id);
    }

    setIsEditing(false);
  };

  const handleSaveTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTask(task?.id, { title: taskTitle });
    setIsEditing(false);
  };

  const handleUpdateTaskStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    updateTaskStatus(task?.id, checked);
  };

  const handleDeleteTask = () => {
    deletetask(task?.id);
  };
  return (
    <Card size={`md`}>
      {!isEditing ? (
        <div className="flex items-center gap-3">
          {loading ? (
            <>
              <Skeleton rounded="sm" className="h-6 w-6" />
              <Skeleton rounded="sm" className="flex-1 h-6 " />
              <Skeleton rounded="sm" className="h-6 w-6" />
              <Skeleton rounded="sm" className="h-6 w-6" />
            </>
          ) : (
            <>
              <InputCheckbox
                icon={<CheckIcon />}
                onChange={handleUpdateTaskStatus}
                value={task?.concluded.toString()}
                loading={loading}
              />
              <Text
                className={cx("flex-1", { "line-through": task?.concluded })}
              >
                {task?.title}
              </Text>
              <div className="flex gap-1">
                <ButtonIcon
                  variant={"tertiary"}
                  icon={<TrashIcon />}
                  onClick={handleDeleteTask}
                />
                <ButtonIcon
                  variant={"tertiary"}
                  icon={<PencilIcon />}
                  onClick={handleEditing}
                />
              </div>
            </>
          )}
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
