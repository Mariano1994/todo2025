import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import Text from "./components/text";
import { PlusIcon, TrashIcon } from "@phosphor-icons/react";
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

      <div>
        <ButtonIcon icon={<TrashIcon />} />
        <ButtonIcon variant="secondary" icon={<TrashIcon />} />
        <ButtonIcon variant="tertiary" icon={<TrashIcon />} />
      </div>

      <InputText />
    </div>
  );
}

export default App;
