import { Character } from "./api.model";

export const getCharacter = (): Promise<Character[]> => {
  return fetch(`https://rickandmortyapi.com/api/character/`).then((response) =>
    response.json()
  );
};
