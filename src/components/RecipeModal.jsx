/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Box, Button, Snackbar, Alert } from "@mui/material";

export const RecipeModal = ({ onConfirm }) => {
  const [open, setOpen] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Maneja la respuesta del usuario
  const handleAgeCheck = (isAdult) => {
    if (isAdult) {
      setOpen(false); // Cierra el modal si el usuario es mayor de edad
      onConfirm(); // Notifica al componente principal que el usuario ha sido verificado
    } else {
      setSnackbarOpen(true); // Muestra el snackbar si el usuario es menor de edad
    }
  };

  return (
    <>
      <Modal open={open} aria-labelledby="verificacion-mayor-edad-modal-title" className="bg-[#3c0358c2]">
        <Box className="p-6 mx-auto mt-10 rounded-lg shadow-lg outline-none w-[90%] md:mt-32 md:max-w-md bg-customPurple">
          <img
            className="flex w-48 mx-auto mb-4 md:w-60"
            src={"/img/Logo_Licoctel_BL.webp"}
            alt="Logo Licoctel"
          />
          <p
            id="age-verification-modal-title"
            className="flex items-center justify-center w-full text-center md:w-80 md:text-lg font-extralight text-customCream md:ml-10"
          >
            Para ingresar a este sitio web debes ser mayor de edad.
          </p>
          <div className="flex flex-col justify-center gap-4 mt-5 md:flex-row">
            <Button
              variant="contained"
              onClick={() => handleAgeCheck(true)}
              className="px-4 py-2 rounded-full bg-customGreen text-customPurple"
            >
              SOY MAYOR DE +18
            </Button>
            <Button
              variant="contained"
              onClick={() => handleAgeCheck(false)}
              className="px-4 py-2 rounded-full bg-customCream text-customPurple"
            >
              SOY MENOR DE -18
            </Button>
          </div>
          <div>
            <p className="mb-4 text-xs italic text-center md:text-sm font-extralight my-7 font-primary text-customCream">
              El exceso de alcohol es perjudicial para la salud. Prohíbase el
              expendio de alcohol a menores de edad.
            </p>
            <hr className="my-2" />
            <p className="text-xs text-center md:text-sm md:w-80 font-extralight font-primary text-customCream md:ml-10">
              <strong className="mr-2 font-bold text-customGreen">
                Aviso Legal:
              </strong>
              Si la información proporcionada no es correcta, no nos hacemos
              responsables del uso indebido de los contenidos aquí presentados.
            </p>
          </div>
        </Box>
      </Modal>

      {/* Snackbar para el mensaje de restricción */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="warning"
          variant="filled"
          className="font-light"
        >
          Debes ser mayor de edad para ingresar a la plataforma.
        </Alert>
      </Snackbar>
    </>
  );
};
