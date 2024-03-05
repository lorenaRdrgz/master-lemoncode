import { Character } from "./rick-and-morty.model";

export const getCharacters= async (name: string): Promise<Character[]> => {
  const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${name}`
  ).then((response) => response);
  const data = await response.json();
  return data.results;
};