
import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const characterUrl = '/api/character';
// const characterUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get(characterUrl);
  return data;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const response = await Axios.delete(`${characterUrl}/${id}`);
  return response.status === 204;
};
