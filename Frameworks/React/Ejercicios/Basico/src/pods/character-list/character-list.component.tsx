import React from "react";
import { Character } from "../member-list/api/api.model";
import { CharacterListHeader } from "./components/character-list-header.component";
import { CharacterRow } from "./components/character-row.component";
import { CharacterSearch } from "./components/character-search.component";

interface Props {
  characters: Character[];
  onSelect: (name: string) => void;
}

export const CharacterList: React.FC<Props> = (props) => {
  const { characters, onSelect } = props;

  return (
    <>
      <CharacterSearch />
      <div className="list-user-list-container">
        <CharacterListHeader />
        {characters.map((character) => (
          <CharacterRow
            key={character.id}
            character={character}
            onClick={() => onSelect(character.name)}
          />
        ))}
      </div>
    </>
  );
};
