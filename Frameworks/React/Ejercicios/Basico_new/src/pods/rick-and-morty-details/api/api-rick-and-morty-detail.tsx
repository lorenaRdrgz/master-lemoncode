import { CharacterDetail } from "./rick-and-morty-detail.model";

export const getCharacter= async (id: string): Promise<CharacterDetail> => {
  const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
  ).then((response) => response);
  const data = await response.json();
  return data;
};