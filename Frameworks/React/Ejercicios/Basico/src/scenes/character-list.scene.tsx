import React from "react";
import { AppLayout } from "@/layouts";
import { CharacterDetailContainer } from "@/pods/character-detail";
import { CharacterListContainer } from "@/pods/character-list/character-list.container";

export const CharacterListScene: React.FC = () => {
  const [selectedName, setSelectedName] = React.useState<string>();

  const handleSelect = (name: string) => {
    setSelectedName(name);
  };

  return (
    <AppLayout>
      <div style={{ display: "flex" }}>
        <div>
          <CharacterListContainer onSelect={handleSelect} />
        </div>
        <div>
          {selectedName && <CharacterDetailContainer name={selectedName} />}
        </div>
      </div>
    </AppLayout>
  );
};
