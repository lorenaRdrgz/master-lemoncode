import { CharacterApi } from './character.api-model';
import { LocationApi } from './location.api-model';
import { EpisodeApi } from './episode.api-model';
import Axios from 'axios';

// const characterUrl = '/api/characters';
// const locationsUrl = '/api/locations';
// const episodesUrl = '/api/characters';

const characterUrl = 'https://rickandmortyapi.com/api/character';
const locationsUrl = 'https://rickandmortyapi.com/api/location';
const episodesUrl = 'https://rickandmortyapi.com/api/episode';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const { data } = await Axios.get(`${characterUrl}/${id}`);
  return data;
};

export const getLocations = async (): Promise<LocationApi[]> => {
  const { data } = await Axios.get(`${locationsUrl}`);
  return data.results;
};

export const getEpisodes = async (): Promise<EpisodeApi[]> => {
  const { data } = await Axios.get(`${episodesUrl}`);
  return data.results;
};

export const saveCharacter = async (character: CharacterApi): Promise<boolean> => {
  console.log(character)
  if(character.id){
    await Axios.put<CharacterApi>(`${characterUrl}/${character.id}`, character)
  }
  else{
    await Axios.post<CharacterApi>(characterUrl, character)
  }

  return true;
};
