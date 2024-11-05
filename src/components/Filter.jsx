import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Filter() {
  return (
    
    <Stack spacing={2} direction="row">
        <h1>Nuestro Filtros </h1>
        <p>Filtra los Cocteles segun tu necesidad</p>
      <Button variant="text">Por Copa</Button>
      <Button variant="contained">Por Ingredientes</Button>
      <Button variant="outlined">Por Alcoholicos</Button>
    </Stack>
  );
}
