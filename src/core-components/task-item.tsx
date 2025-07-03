import { useState } from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import { TrashIcon, CheckIcon, XIcon, PencilIcon } from "@phosphor-icons/react";
import InputText from "../components/input-text";

function TaskItem() {
  const [isEditing, setIsEditing] = useState(true);

  const handleEditing = () => {
    setIsEditing(true);
  };

  const handleExitEditing = () => {
    setIsEditing(false);
  };
  return (
    <Card size={`md`} className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox icon={<CheckIcon />} />
          <Text className="flex-1">
            Criar um novo projeto no meu portifólio
          </Text>
          <div className="flex gap-1">
            <ButtonIcon variant={"tertiary"} icon={<TrashIcon />} />
            <ButtonIcon
              variant={"tertiary"}
              icon={<PencilIcon />}
              onClick={handleEditing}
            />
          </div>
        </>
      ) : (
        <>
          <InputText size={"md"} className="flex-1" />
          <div className="flex gap-2">
            <ButtonIcon
              variant={"secondary"}
              icon={<XIcon className="text-pink-base" />}
              onClick={handleExitEditing}
            />
            <ButtonIcon variant={"primary"} icon={<CheckIcon />} />
          </div>
        </>
      )}
    </Card>
  );
}

export default TaskItem;
