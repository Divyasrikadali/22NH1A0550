import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

function Statistics() {
  const [urls] = useState([
    { original: "https://google.com", short: "http://short.ly/abc123" },
    { original: "https://youtube.com", short: "http://short.ly/xyz789" }
  ]);

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Statistics Page
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Original URL</TableCell>
            <TableCell>Short URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.original}</TableCell>
              <TableCell>
                <a href={row.original} target="_blank" rel="noreferrer">
                  {row.short}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Statistics;