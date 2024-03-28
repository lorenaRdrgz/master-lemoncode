import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  data: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: data.id.toString(),
  name: data.name,
  status: data.status,
  species: data.species,
  type: data.type,
  gender: data.gender,
  image: data.image,
  url: data.url
});
