import { styled } from '@mui/material/styles';
import { TableRow } from "@mui/material";


export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:hover':{cursor: 'pointer'},
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.grey[400],
    },
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.grey[600],
    },
    '&:nth-of-type(odd):hover': {
        backgroundColor: theme.palette.info.dark,
    },
    '&:nth-of-type(even):hover': {
        backgroundColor: theme.palette.info.dark,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));