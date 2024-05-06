import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

const mapCharacterFromApiToVm = (
  data: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: data.id.toString(),
  name: data.name,
  status: data.status,
  species: data.species,
  type: data.type,
  gender: data.gender,
  image: data.image,
  url: data.url,
  location: data.location,
  bestSentences: data.bestSentences,
});

export const mapCharacterCollectionFromApiToVm = (
  data: apiModel.CharacterEntityApi[]
): viewModel.CharacterEntityVm[] =>
  mapToCollection(data, mapCharacterFromApiToVm);