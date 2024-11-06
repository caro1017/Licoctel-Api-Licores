import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FilterCustom() {
  return (
    <div className="p-6 ml-7 md:ml-[180px] ">

      <div className="mb-4">
        <h2 className="text-customPurple font-semibold text-lg text-secondary">Nuestros Filtros</h2>
        <p className="text-customGreen text-xl font-bold text-secondary">Filtra los cocteles según tu necesidad</p>
      </div>

     
      <Stack spacing={2} direction="row" >
        <Button
          variant="contained"
          className="bg-customPurple text-customCream px-4 py-2 rounded-full hover:bg-customPurple text-secondary"
        >
          Por copa
        </Button>
        <Button
          variant="outlined"
          className="bg-customPurple text-customCream  border-gray-300 px-4 py-2 rounded-full hover:bg-customPurple text-secondary"
        >
          Por Ingrediente
        </Button>
        <Button
          variant="outlined"
          className="bg-customPurple text-customCream  border-gray-300 px-4 py-2 rounded-full hover:bg-customPurple text-secondary"
        >
          Por Alcoholicos
        </Button>
      </Stack>
    </div>
  );
}
