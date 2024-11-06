import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center mt-3">
      <TextField
        variant="outlined"
        placeholder="¿Qué estás Buscando?"
        className="max-w-md md:w-full"
        sx={{
          input: { marginLeft: "15px" },
          fieldset: { borderColor: "#3C0358" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#3C0358", // Color por defecto
              borderRadius: "50px",
            },
            "&:hover fieldset": {
              borderColor: "#3C0358", // Color al pasar el ratón
            },
            "&.Mui-focused fieldset": {
              borderColor: "#63d627", // Color cuando está activo/enfocado
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="search"
              className="text-customPurple hover:text-customGreen"
            >
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
