
import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

// const characterUrl = '/api/characters';
const characterUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (page: string, name: string): Promise<CharacterEntityApi[]> => {
  let url = '';
  if (name == '') {
    url = `${characterUrl}?page=${page}`;

  }
  else {
    url = `${characterUrl}?name=${name}&${page}`;
  }
  const { data } = await Axios.get(url);
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const response = await Axios.delete(`${characterUrl}/${id}`);
  return response.status === 204;
};
