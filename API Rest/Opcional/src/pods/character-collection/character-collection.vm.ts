export interface CharacterEntityVm {
  id: string;
  image: string;
  name: string;
  status: string;
  gender: string;
  species: string;
  type: string;
  url: string;
  location: Location;
  bestSentences: string;
}

export interface Location {
  name: string;
  url:  string;
}
