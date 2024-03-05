export interface CharacterDetailEntity {
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
}

export const createDefaultCharacterDetail = (): CharacterDetailEntity => ({
    id:       0,
    name:     '',
    status:   '',
    species:  '',
    type:     '',
    gender:   '',
    image:    '',
    episode:  [],
    url:      '',
    created:  new Date('01/01/1900')
});
