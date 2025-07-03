import Container from "../components/container";
import TaskItem from "../core-components/task-item";
import TasksSummary from "../core-components/tasks-summary";

function Home() {
  return (
    <Container as="article" className="space-y-3">
      <TasksSummary />
      <TaskItem />
    </Container>
  );
}

export default Home;
