import { Character } from "./rick-and-morty.model";

export const getCharacters = (name: string): Promise<Character[]> => {
  return fetch(`https://rickandmortyapi.com/api/character/?name=${name}`).then((response) =>
    response.json()
  );
};