
import Axios from 'axios';
import { CharacterEntityApi, GetCharacterColecionResponse } from './character-collection.api-model';
import { gql } from 'graphql-request'
import { graphqlClient } from 'core/graphql';

interface FilterCharacter {
  name: String
  status: String
  species: String
  type: String
  gender: String
}

const characterUrl = 'https://rickandmortyapi.com/graphql';

export const getCharacterCollection = async (page:string, name:string): Promise<CharacterEntityApi[]> => {

  let filter:FilterCharacter = {
    name: name,
    status: undefined,
    species: undefined,
    type: undefined,
    gender: undefined
  }


  const query = gql`
      query ($page:Int, $filter:FilterCharacter) {
        characters(page: $page, filter: $filter) {
          info {
            count
          }
          results {
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
      }     
  `;

  const { characters } = await graphqlClient.request<GetCharacterColecionResponse>(query, { page: parseInt(page), filter:filter })
  return characters;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const mutation = gql`
    mutation($characterId: Int!){
      deleteCharacter(character:$characterId)
    }
  `
  await graphqlClient.request(mutation, { characterId: parseInt(id) });

  return true;
};
