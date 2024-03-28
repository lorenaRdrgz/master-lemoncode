export interface CharacterVM {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
  location: string;
  locationId:string;
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
  location:'',
  locationId:''
});