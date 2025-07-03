import { CheckIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
import Badge from "../components/badge";
import Button from "../components/button";
import Container from "../components/container";
import Text from "../components/text";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import Card from "../components/card";
import Skeleton from "../components/skeleton";

function Home() {
  return (
    <Container className="space-y-4 mt-5">
      <Text> Marinao</Text>

      <div className="flex gap-2">
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
        <Badge variant="secondary" loading>
          5
        </Badge>
      </div>

      <Button
        variant="primary"
        size="md"
        icon={<PlusIcon className="text-green-dark" />}
      >
        Enviar
      </Button>

      <div className="flex items-center gap-2">
        <ButtonIcon icon={<TrashIcon />} />
        <ButtonIcon icon={<TrashIcon />} loading />
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

export default Home;
