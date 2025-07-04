import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

function TasksSummary() {
  const { tasksCount, concludedTasksCount } = useTasks();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className="!text-gray-300">
          {" "}
          Tarefas Criadas
        </Text>
        <Badge variant={"secondary"}>{tasksCount}</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className="!text-gray-300">
          {" "}
          Concluidas
        </Text>
        <Badge variant={"primary"}>
          {concludedTasksCount} de {tasksCount}
        </Badge>
      </div>
    </div>
  );
}

export default TasksSummary;
