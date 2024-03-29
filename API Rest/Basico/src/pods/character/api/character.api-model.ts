export interface CharacterApi {
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
  metadata: {
    path: string;
  };
}

export interface Location {
  name: string;
  url:  string;
}

