import React from "react";
import { createDefaultCharacterDetail } from "./rick-and-morty-details.vm";
import { RickAndMortyDetailsComponent } from "./rick-and-morty-details.component";
import { getCharacter } from "./api/api-rick-and-morty-detail";

interface Props {
    id: string;
}

export const RickAndMortyDetailsContainer: React.FC<Props> = (props) => {
    const { id } = props;
    const [character, setCharacter] = React.useState(createDefaultCharacterDetail());
    
    React.useEffect(() => {
        getCharacter(id).then(setCharacter);
    }, []);

    return <RickAndMortyDetailsComponent character={character} />
}