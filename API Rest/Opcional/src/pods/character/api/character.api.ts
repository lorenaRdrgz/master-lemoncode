import { CharacterApi, GetCharacterResponse } from './character.api-model';
import { LocationApi } from './location.api-model';
import { EpisodeApi } from './episode.api-model';
import Axios from 'axios';
import { graphqlClient } from 'core/graphql';
import { gql } from 'graphql-request';


const characterUrl = 'https://rickandmortyapi.com/graphql';

const locationsUrl = 'https://rickandmortyapi.com/api/location';
const episodesUrl = 'https://rickandmortyapi.com/api/episode';

export const getCharacter = async (id: string): Promise<CharacterApi> => {
  const query = gql`
    query ($id: ID!) {
      character(id:$id) {
            id
            name
            status
            gender
            image
            location {
              name
            }
            status
            species
            type
      }
}
  `
  const { character } = await graphqlClient.request<GetCharacterResponse>(query, { characterId: parseInt(id) })
  return character;
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
  const mutation = gql`
    mutation($character: CharacterInput!){
      saveCharacter(character:$character)
    }
  `
  await graphqlClient.request(mutation, { character });

  return true;
};
