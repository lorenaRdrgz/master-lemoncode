export interface Character {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  image:    string;
  episode:  string[];
  url:      string;
  created:  string;
  location: Location;
  origin: Location;
  bestSentences: string;
}

export interface Location {
  name: string;
  url:  string;
}

export interface CharacterEdit {
  id:       number;
  name:     string;
  status:   string;
  gender:   string;
  image:    string;
  url:      string;
  location: Location;
  bestSentences: string;
}