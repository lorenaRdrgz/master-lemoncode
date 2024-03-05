import * as am from "./api/rick-and-morty-detail.model";
import * as vm from "./rick-and-morty-details.vm";

export const mapCharacterToVM = (data: am.CharacterDetail): vm.CharacterDetailEntity => ({
  id:       data.id,
  name:     data.name,
  status:   data.status,
  species:  data.species,
  type:     data.type,
  gender:   data.gender,
  image:    data.image,
  episode:  data.episode,
  url:      data.url,
  created:  data.created
});
