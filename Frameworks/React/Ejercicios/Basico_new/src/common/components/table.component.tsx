import React from "react";
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { StyledTableCell } from "@/common/components/styled-table-cell.component";
import { StyledTableRow } from "@/common/components/styled-table-row.component";
import { Data } from "../models/data.model";

interface Props {
    data: Data[],
    ruta: string
}

export const TableComponent: React.FC<Props> = (props) => {
    const { data, ruta } = props;
    const navigate = useNavigate();

    return <>
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
                        data.map((d) => (
                            <>
                                <StyledTableRow key={d.id} onClick={() => {
                                    if (ruta == 'rick') {
                                        navigate(routes.rickDetails(d.id));
                                    }
                                    else if (ruta == 'github') {
                                        navigate(routes.githubDetails(d.id));
                                    }
                                }}>
                                    <StyledTableCell><img className="avatar" src={d.image} alt="image" /></StyledTableCell>
                                    <StyledTableCell><span>{d.id}</span></StyledTableCell>
                                    <StyledTableCell><span>{d.name}</span></StyledTableCell>
                                </StyledTableRow>
                            </>
                        ))
                    }
                </TableBody >
            </Table>
        </TableContainer>
    </>
};