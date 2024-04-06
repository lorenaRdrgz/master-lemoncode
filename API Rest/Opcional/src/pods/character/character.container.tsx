import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createDefaultCharacterDetail, CharacterVM } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi, mapEpisodesFromApiToVm, mapLocationsFromApiToVm } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';
import { mapToCollection } from 'common/mappers';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterVM>(createDefaultCharacterDetail());
  const [locations, setLocations] = React.useState<Lookup[]>([]);
  const [episodes, setEpisodes] = React.useState<Lookup[]>([]);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadLocationsCollection = async () => {
    const apiLocations = await api.getLocations();
    setLocations(mapToCollection(apiLocations, mapLocationsFromApiToVm));
  };

  const handleLoadEpisodesCollection = async () => {
    const apiEpisodes = await api.getEpisodes();
    setEpisodes(mapToCollection(apiEpisodes, mapEpisodesFromApiToVm));
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadLocationsCollection();
    handleLoadEpisodesCollection();
  }, []);

  const handleSave = async (character: CharacterVM) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} locations={locations} episodes={episodes} onSave={handleSave} />;
};
