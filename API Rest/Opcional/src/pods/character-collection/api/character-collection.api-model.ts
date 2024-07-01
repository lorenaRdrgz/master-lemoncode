export interface CharacterEntityApi {
  info:any;
  results:CharacterResult[];
}

export interface CharacterResult{
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
  bestSentences: string;
}

export interface Location {
  name: string;
  url:  string;
}

export interface GetCharacterColecionResponse {
  characters: CharacterEntityApi;
}

