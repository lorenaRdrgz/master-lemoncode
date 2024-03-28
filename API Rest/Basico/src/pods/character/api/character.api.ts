import { CharacterApi } from './character.api-model';
import { Lookup } from 'common/models';
import { LocationApi } from './location.api-model';
import { EpisodeApi } from './episode.api-model';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  ).then((response) => response);
  const data = await response.json();
  return data;
};

export const getLocations = async (): Promise<LocationApi[]> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location`
  ).then((response) => response);
  const data = await response.json();
  return data.results;
};

export const getEpisodes = async (): Promise<EpisodeApi[]> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode`
  ).then((response) => response);
  const data = await response.json();
  return data.results;
};

export const saveCharacter = async (character: CharacterApi): Promise<boolean> => {
  return true;
};
