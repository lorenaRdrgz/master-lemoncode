import React from "react";
import { CharacterEntity } from "./rick-and-morty.vm";
import { RickAndMortyComponent } from "./rick-and-morty.component";
import { getCharacters } from "./rick-and-morty.repository";



export const RickAndMortyContainer: React.FC = () => {
  const [name, setName] = React.useState('Rick');
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

  React.useEffect(() => {
    getCharacters(name).then(setCharacters);
  }, []);

  const handleSearch = (name: string) => {
    getCharacters(name).then(setCharacters);
  }

  return <>
    <RickAndMortyComponent characters={characters} onSearch={handleSearch} />
  </>;
};
