import React from 'react';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function FloatingButton() {
  // const FloatingButton = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="secondary" aria-label="edit">
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
}