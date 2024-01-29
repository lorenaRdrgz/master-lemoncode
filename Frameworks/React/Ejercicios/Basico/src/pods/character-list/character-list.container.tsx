import React from "react";
import { Character } from "../member-list/api/api.model";
import { getCharacter } from "./api/api";
import { CharacterList } from "./character-list.component";

interface Props {
  onSelect: (name: string) => void;
}

export const CharacterListContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [characters, setCharacter] = React.useState<Character[]>([]);

  React.useEffect(() => {
    getCharacter().then(setCharacter);
  }, []);

  return <CharacterList characters={characters} onSelect={onSelect} />;
};
