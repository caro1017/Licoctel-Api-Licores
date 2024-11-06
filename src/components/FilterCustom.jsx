import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FilterCustom() {
  return (
    <div className="p-6 md:ml-32 ">

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-customPurple text-secondary">Nuestros Filtros</h2>
        <p className="text-xl font-bold text-customGreen text-secondary">Filtra los cocteles según tu necesidad</p>
      </div>

     
      <Stack spacing={2} direction="row" >
        <Button
          variant="contained"
          className="px-4 py-2 rounded-full bg-customPurple text-customCream hover:bg-customPurple text-secondary"
        >
          Por copa
        </Button>
        <Button
          variant="outlined"
          className="px-4 py-2 border-gray-300 rounded-full bg-customPurple text-customCream hover:bg-customPurple text-secondary"
        >
          Por Ingrediente
        </Button>
        <Button
          variant="outlined"
          className="px-4 py-2 border-gray-300 rounded-full bg-customPurple text-customCream hover:bg-customPurple text-secondary"
        >
          Por Alcoholicos
        </Button>
      </Stack>
    </div>
  );
}
