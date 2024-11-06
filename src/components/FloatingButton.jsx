import Box from "@mui/material/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";

export default function FloatingButton() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 16, md: 24 }, 
        right: { xs: 16, md: 24 }, 
        display: "flex",
        alignItems: "center",
      }}
      className="z-50 space-x-2 group" 
    >
      <div className="relative items-center hidden px-4 py-2 text-white bg-green-500 rounded-full shadow-lg group-hover:flex">
        <span className="text-base font-medium">😊¡Hola! ¿Necesitas Ayuda?</span>
      </div>
      <IconButton
        href="https://wa.me/your_number"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-green-500 shadow-lg hover:bg-green-600"
        sx={{
          width: { xs: 48, md: 56 }, 
          height: { xs: 48, md: 56 },
          borderRadius: "50%", 
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 24, md: 28 } }} />
      </IconButton>
    </Box>
  );
}
