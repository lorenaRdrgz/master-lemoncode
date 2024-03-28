import { Lookup } from 'common/models';
import * as apiModel from './api/character.api-model';
import * as apiModelLocations from './api/location.api-model';
import * as apiModelEpisodes from './api/episode.api-model';
import * as viewModel from './character.vm';


export const mapCharacterFromApiToVm = (
  data: apiModel.CharacterApi
): viewModel.CharacterVM => ({
  ...data,
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  type: data.type,
  gender: data.gender,
  image: data.image,
  url: data.url,
  location: data.location.name,
  locationId: data.location.url.split("/")[data.location.url.split("/").length - 1]

});

export const mapCharacterFromVmToApi = (data: viewModel.CharacterVM): apiModel.CharacterApi =>
(({
  ...data,
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  type: data.type,
  gender: data.gender,
  image: data.image,
  url: data.url,
  location: data.location,
  locationId: data.locationId
} as unknown) as apiModel.CharacterApi);

export const mapLocationsFromApiToVm = (
  data: apiModelLocations.LocationApi
): Lookup => ({
  ...data,
  id: data.name,
  name: data.name,
  checked:false
});

export const mapLocationsFromVmToApi = (data: Lookup): apiModelLocations.LocationApi =>
(({
  ...data,
  id: data.name,
  name: data.name
} as unknown) as apiModelLocations.LocationApi);

export const mapEpisodesFromApiToVm = (
  data: apiModelEpisodes.EpisodeApi
): Lookup => ({
  ...data,
  id: data.id.toString(),
  name: data.name,
  checked:false
});

export const mapEpisodesFromVmToApi = (data: Lookup): apiModelEpisodes.EpisodeApi =>
(({
  ...data,
  id: data.id.toString(),
  name: data.name
} as unknown) as apiModelEpisodes.EpisodeApi);

