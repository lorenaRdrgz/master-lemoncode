import React, { useEffect } from "react";
import { Button, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { TextField } from "@/common/components/text-field.component";
import Paper from '@mui/material/Paper';
import { StyledTableCell } from "@/common/components/styled-table-cell.component";
import { StyledTableRow } from "@/common/components/styled-table-row.component";
import { Member } from "./github-list.vm";

interface Props {
    members: Member[];
    // onSelect: (login: string) => void;
  }

export const GitHubListComponent: React.FC<Props> = (props) => {
     const { members } = props;
    const [org, setOrg] = React.useState('lemoncode');
    const navigate = useNavigate();

    return <>
        <div>
            <h1>Github {org.toLocaleUpperCase()} Members</h1>
            <br />
            <div className="buscador">
                <form>
                    <TextField
                        type="text"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="Organización" />
                    <Button
                        type="submit"
                        variant="contained">
                        Buscar
                    </Button>
                </form>
            </div>
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
                            members.map((member) => (
                                <>
                                    <StyledTableRow key={member.id} onClick={() => { navigate(routes.githubDetails(member.id)); }}>
                                        <StyledTableCell><img className="avatar" src={member.avatarUrl} alt="member image" /></StyledTableCell>
                                        <StyledTableCell><span>{member.id}</span></StyledTableCell>
                                        <StyledTableCell><span>{member.login}</span></StyledTableCell>
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