import React, { FormEvent, useEffect } from "react";
import { Button, IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { CharacterEntity } from "./rick-and-morty.vm";
import { TextField } from "@/common/components/text-field.component";
import { TableComponent } from "@/common/components/table.component";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface Props {
    characters: CharacterEntity[];
    onSearch: (name: string) => void;
}

export const RickAndMortyComponent: React.FC<Props> = (props) => {
    const { characters, onSearch } = props;
    const [name, setName] = React.useState('Rick');
    const navigate = useNavigate();

    const handleSearch = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onSearch(name);
    }

    return <>
        <div>
        <div className="row">
                <h1>Character: {name.toLocaleUpperCase()}</h1>
                <Button
                    className="button"
                    type="button"
                    variant="contained"
                    onClick={() => {
                        navigate(routes.home);
                    }}>
                    <ArrowBackIosIcon />
                     Volver
                </Button>
            </div>
            <br />
            <br />
            <form className="buscador" onSubmit={handleSearch}>
                <TextField
                    className="txtBusqueda"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Buscar..."
                    label="Nombre"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon className="lupa" style={{ fill: "black" }} />
                </IconButton>
            </form>
            <hr />
            <TableComponent data={characters} ruta="rick"/>
            <hr />
            <div className="botonera">
                <Button
                    type="button"
                    variant="contained"
                    onClick={() => {
                        navigate(routes.home);
                    }}>
                    Volver
                </Button>
            </div>
        </div>
    </>
};