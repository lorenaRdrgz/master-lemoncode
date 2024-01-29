import React from "react";
import { CharacterDetailEntity } from "./character-detail.vm";
import { CharacterDetail } from "./character-detail.component";

interface Props {
  name: string;
}

export const CharacterDetailContainer: React.FC<Props> = (props) => {
  const { name } = props;
  const [character, setCharacter] = React.useState<CharacterDetailEntity>();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${name}`)
      .then((response) => response.json())
      .then(setCharacter);
  }, [name]);

  return <CharacterDetail character={character} />;
};
