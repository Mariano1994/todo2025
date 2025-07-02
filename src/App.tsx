import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import Card from "./components/card";
import Container from "./components/container";
import InputCheckbox from "./components/input-checkbox";
import InputText from "./components/input-text";
import Skeleton from "./components/skeleton";
import Text from "./components/text";
import { PlusIcon, TrashIcon } from "@phosphor-icons/react";

import { CheckIcon } from "@phosphor-icons/react";
function App() {
  return (
    <Container className="space-y-4 mt-5">
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
      <InputCheckbox icon={<CheckIcon />} />

      <Card size="md">
        <div className="flex items-center gap-4 ">
          <InputText className="w-sm" />
          <InputCheckbox icon={<CheckIcon />} />
        </div>
      </Card>

      <div className="space-y-4">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
      </div>
    </Container>
  );
}

export default App;
