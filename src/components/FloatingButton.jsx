import React from 'react';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton } from '@mui/material';

export default function FloatingButton() {
 
  return (
    <Box 
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 24 }, // Margen inferior responsivo
        right: { xs: 16, md: 24 },  // Margen derecho responsivo
      }}
      className="z-50"
    >
      <IconButton
        href="https://wa.me/your_number"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white shadow-lg transition duration-300"
        sx={{
          width: { xs: 48, md: 56 }, // Tamaño responsivo para el botón
          height: { xs: 48, md: 56 },
          borderRadius: '50%', // Hace que el botón sea redondo
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 24, md: 28 } }} /> {/* Tamaño responsivo del ícono */}
      </IconButton>
    </Box>
  );
}