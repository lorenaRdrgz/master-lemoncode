import React, { FormEvent, useEffect } from "react";
import { Button } from "@mui/material";
import { TextField } from "@/common/components/text-field.component";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { Member } from "./github-list.vm";
import { TableComponent } from "@/common/components/table/table.component";
import { mapMemberListToData } from "./github-list.mappers";

interface Props {
    members: Member[];
    onSearch: (org: string) => void;
}

export const GitHubListComponent: React.FC<Props> = (props) => {
    const { members, onSearch } = props;
    const data = mapMemberListToData(members);
    const [org, setOrg] = React.useState('Lemoncode');

    const navigate = useNavigate();
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(org);
    }

    return <>
        <div>
            <div className="row">
                <h1>Github {org.toLocaleUpperCase()} Members</h1>
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
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Buscar..."
                    label="Organización"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon className="lupa" style={{ fill: "black" }} />
                </IconButton>
            </form>
            <hr />
            <TableComponent data={data} ruta="github" />
            <hr />
            <br />
        </div>
    </>
};