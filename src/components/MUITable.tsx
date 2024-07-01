import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

const MUITable = () => {
  const tableData = [
    {
      terminal: 'Cascade Airport',
      destination: 'Cascade',
      scheduled_time: '10/9/2023',
      via: null,
      branding: 'ICS',
      select: 'mil',
    },
    {
      terminal: 'Kashan Airport',
      destination: 'Kashan',
      scheduled_time: '8/12/2023',
      via: 'Dinard/Pleurtuit/Saint-Malo',
      branding: 'KKS',
      select: 'net',
    },
    {
      terminal: 'Lumbala Airport',
      destination: "Lumbala N'guimbo",
      scheduled_time: '12/11/2023',
      via: 'Vestmannaeyjar',
      branding: 'GGC',
      select: 'info',
    },
    {
      terminal: 'Rincon De Los Sauces Airport',
      destination: 'Rincon de los Sauces',
      scheduled_time: '11/30/2023',
      via: 'Kahului',
      branding: 'RDS',
      select: 'info',
    },
    {
      terminal: 'Sharm El Sheikh International Airport',
      destination: 'Sharm el-Sheikh',
      scheduled_time: '11/1/2023',
      via: 'Baures',
      branding: 'SSH',
      select: 'org',
    },
    {
      terminal: 'Mandera Airport',
      destination: 'Mandera',
      scheduled_time: '2/10/2024',
      via: null,
      branding: 'NDE',
      select: 'gov',
    },
    {
      terminal: 'Valle Airport',
      destination: 'Grand Canyon',
      scheduled_time: '6/2/2024',
      via: null,
      branding: 'VLE',
      select: 'org',
    },
    {
      terminal: 'Gibb River Airport',
      destination: null,
      scheduled_time: '8/25/2023',
      via: 'Stebbins',
      branding: 'GBV',
      select: 'net',
    },
    {
      terminal: 'Woomera Airfield',
      destination: 'Woomera',
      scheduled_time: '12/26/2023',
      via: 'St Louis',
      branding: 'UMR',
      select: 'biz',
    },
    {
      terminal: 'Presidente Prudente Airport',
      destination: 'Presidente Prudente',
      scheduled_time: '9/15/2023',
      via: 'Qishn',
      branding: 'PPB',
      select: 'gov',
    },
  ];

  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label='table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Terminal</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Scheduled Time</TableCell>
            <TableCell>Via</TableCell>
            <TableCell>Branding</TableCell>
            <TableCell align='center'>Select</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.terminal}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.terminal}</TableCell>
              <TableCell>{row.destination}</TableCell>
              <TableCell>{row.scheduled_time}</TableCell>
              <TableCell>{row.via}</TableCell>
              <TableCell>{row.branding}</TableCell>
              <TableCell align='center'>{row.select}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MUITable;
