import { Axios } from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

let characterCollection = [];

export const getCharacterCollection = async (page: string, name: string): Promise<CharacterEntityApi[]> => {
  if (name == '') {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    ).then((response) => response);
    const data = await response.json();
    return data.results;


  }
  else {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?name=${name}&=${page}`
    ).then((response) => response);
    const data = await response.json();
    return data.results;
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
