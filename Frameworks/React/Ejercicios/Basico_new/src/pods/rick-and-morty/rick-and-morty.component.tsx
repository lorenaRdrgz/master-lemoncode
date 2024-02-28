import React, { useEffect } from "react";
import { Button, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import Paper from '@mui/material/Paper';
import { StyledTableCell } from "@/common/components/styled-table-cell.component";
import { StyledTableRow } from "@/common/components/styled-table-row.component";

interface CharacterEntity {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    url: string
    created: string
}

export const RickAndMortyComponent: React.FC = () => {
    const [characters, setCharacters] = React.useState<CharacterEntity[]>();
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10`)
            .then(response => response.json()
                .then(json => setCharacters(json)))
    }, []);

    return <>
        <div>
            <h1> Rick and Morty: </h1>
            <br />
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Avatar</StyledTableCell>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            characters.map((char) => (
                                <>
                                    <StyledTableRow key={char.id}>
                                        <StyledTableCell><img className="avatar" src={char.image} alt="character image" /></StyledTableCell>
                                        <StyledTableCell><span>{char.id}</span></StyledTableCell>
                                        <StyledTableCell><span>{char.name}</span></StyledTableCell>
                                    </StyledTableRow>
                                </>
                            ))
                        }
                    </TableBody >
                </Table>
            </TableContainer>
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