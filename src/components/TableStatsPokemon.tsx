import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
interface StatsPokemonTypes {
  hp: string;
  attack: string;
  defense: string;
  specialAttack: string;
  specialDefense: string;
  speed: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.palette.secondary.main,
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

export default function TableStatsPokemon(props: StatsPokemonTypes) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>HP</StyledTableCell>
            <StyledTableCell align="right">Attack</StyledTableCell>
            <StyledTableCell align="right">Defense</StyledTableCell>
            <StyledTableCell align="right">Special-attack</StyledTableCell>
            <StyledTableCell align="right">Special-defense</StyledTableCell>
            <StyledTableCell align="right">Speed</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell>{props.hp}</StyledTableCell>
            <StyledTableCell align="right">{props.attack}</StyledTableCell>
            <StyledTableCell align="right">{props.defense}</StyledTableCell>
            <StyledTableCell align="right">{props.specialAttack}</StyledTableCell>
            <StyledTableCell align="right">{props.specialDefense}</StyledTableCell>
            <StyledTableCell align="right">{props.speed}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
