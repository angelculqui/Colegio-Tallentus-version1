import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(12456, 'Matrícula Nivel Primaria - 3er Grado - Alumno Regular - Periodo 2022', 'S/.300'),
  //createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //createData('Eclair', 262, 16.0, 24, 6.0),
  //createData('Cupcake', 305, 3.7, 67, 4.3),
  //createData('Gingerbread', 356, 16.0, 49, 3.9),
  
];

export default function TablasGenerarPago() {
  return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650, '&:last-child td, &:last-child th': { border: '1px solid #ddd' }  }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell  align='center'>ID</TableCell>
            <TableCell align="center">Detalle</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: '1px solid #ddd'} }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}