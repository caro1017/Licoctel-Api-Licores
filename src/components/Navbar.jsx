/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMusicOn, setIsMusicOn] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null); // Controla la apertura del menú
  const audioRef = useRef(new Audio("/public/audio/audio-web.mp3")); 

  // Crea una instancia del audio al cargar el componente
  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    // Inicia la reproducción de la música cuando se monta el componente
    if (isMusicOn) {
      audio
        .play()
        .catch((error) =>
          console.error("Error al reproducir el audio:", error)
        );
    }

    return () => {
      // Detiene el audio cuando el componente se desmonta
      audio.pause();
    };
  }, [isMusicOn]);

  const menuItems = [
    { name: "Inicio", url: "#" },
    { name: "Categorías", url: "/" },
    { name: "Filtro", url: "/" },
    { name: "Beneficios", url: "/" },
  ];

  const toggleMusic = () => {
    setIsMusicOn((prev) => !prev);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between px-4 mt-5 space-x-4 md:px-20">
        {/* Menú hamburguesa */}
        <div>
          <IconButton
            onClick={handleMenuOpen}
            aria-label="menu"
            className="text-customPurple hover:text-customGreen"
          >
            <MenuIcon />
          </IconButton>
          <span className="hidden text-sm font-medium md:inline-block text-customPurple">
            MENÚ
          </span>
        </div>

        {/* Logo */}
        <img
          className="w-40 lg:w-56"
          src="/public/img/Logo_Licoctel_Color.webp"
          alt="Logo Licoctel"
        />

        {/* Botón de música con icono dinámico */}
        <IconButton
          onClick={toggleMusic}
          aria-label="toggle music"
          className="text-customPurple hover:text-customGreen"
        >
          {isMusicOn ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </div>

      {/* Menú desplegable */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        className="mt-10"
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              window.location.href = item.url;
              handleMenuClose();
            }}
            className="text-customPurple hover:text-customGreen"
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>

      {/* Barra de búsqueda */}
      <div className="px-4 md:px-10">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
