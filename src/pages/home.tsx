import Container from "../components/container";

import TasksItemsList from "../core-components/tasks-items-list";
import TasksSummary from "../core-components/tasks-summary";

function Home() {
  return (
    <Container as="article" className="space-y-3">
      <TasksSummary />
      <TasksItemsList />
    </Container>
  );
}

export default Home;
