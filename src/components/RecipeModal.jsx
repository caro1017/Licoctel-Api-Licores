/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Box, Typography, Button, Snackbar, Alert } from "@mui/material";

export const RecipeModal = ({ onVerified }) => {
  const [open, setOpen] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Maneja la respuesta del usuario
  const handleAgeCheck = (isAdult) => {
    if (isAdult) {
      setOpen(false); // Cierra el modal si el usuario es mayor de edad
      onVerified(); // Notifica al componente principal que el usuario ha sido verificado
    } else {
      setSnackbarOpen(true); // Muestra el snackbar si el usuario es menor de edad
    }
  };

  return (
    <>
      <Modal open={open} aria-labelledby="age-verification-modal-title">
        <Box className="max-w-md p-6 mx-auto mt-32 bg-white rounded-lg shadow-lg outline-none">
          <img src={"../../public/Logo_Licoctel_Color.webp"} alt="" />
          <Typography
            id="age-verification-modal-title"
            variant="h5"
            component="h2"
            className="mb-4 font-bold text-center"
          >
            ¿Eres mayor de edad?
          </Typography>
          <div className="flex justify-center gap-4">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAgeCheck(true)}
              className="bg-blue-500"
            >
              Sí, soy mayor de edad
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleAgeCheck(false)}
              className="bg-red-500"
            >
              No, soy menor de edad
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Snackbar para el mensaje de restricción */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Debes ser mayor de edad para ingresar a la plataforma.
        </Alert>
      </Snackbar>
    </>
  );
};
