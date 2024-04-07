
import Axios from 'axios';
import { CharacterEntityApi, GetCharacterColecionResponse } from './character-collection.api-model';
import {  gql } from 'graphql-request'
import { graphqlClient } from 'core/graphql';

const characterUrl = '/api/character';
// const characterUrl = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {

  const query = gql`
    query{
      characters{
        id
        name
        status
        gender
        image
        url
        location {
          name
          url
        }
        bestSentences
        status
        species
        type
      }
    }
  `;

  const { characters } = await graphqlClient.request<GetCharacterColecionResponse>(query)

  return characters;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const mutation = gql`
    mutation($characterId: Int!){
      deleteCharacter(character:$characterId)
    }
  `
  await graphqlClient.request(mutation, {characterId: parseInt(id)});

  return true;
};
