import Badge from "./components/badge";
import Button from "./components/button";
import Text from "./components/text";
import { PlusIcon } from "@phosphor-icons/react";
function App() {
  return (
    <div>
      <Text> Marinao</Text>

      <Badge variant="secondary">5</Badge>
      <Badge variant="primary">2 de 5</Badge>

      <Button
        variant="primary"
        size="md"
        icon={<PlusIcon className="text-green-dark" />}
      >
        Enviar
      </Button>
    </div>
  );
}

export default App;
