export interface CharacterVM {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  image:    string;
  episode:  Episode[];
  url:      string;
  created:  Date;
  location: Location;
  bestSentences: string;
}

export interface Location {
  name: string;
  url:  string;
}

export interface Episode {
  name: string;
  id:  string;
}

export const createDefaultCharacterDetail = (): CharacterVM => ({
  id:       0,
  name:     '',
  status:   '',
  species:  '',
  type:     '',
  gender:   '',
  image:    '',
  episode:  [],
  url:      '',
  created:  new Date('01/01/1900'),
  location:{name:'', url:''},
  bestSentences: '',
});