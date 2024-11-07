/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const audioRef = useRef(
    new Audio("/public/audio/MA_Awesomemusic_ModernInterior.mp4")
  );
  const navigate = useNavigate();

  // Crea una instancia del audio al cargar el componente
  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    if (isMusicOn) {
      audio
        .play()
        .catch((error) =>
          console.error("Error al reproducir el audio:", error)
        );
    } else {
      audio.pause(); // Asegúrate de pausar el audio si la música está apagada
    }

    return () => {
      audio.pause(); // Detiene el audio cuando el componente se desmonta
    };
  }, [isMusicOn]);

  const menuItems = [
    { name: "Inicio", url: "#" },
    { name: "Categorías", url: "#sectionCategory" },
    { name: "Filtro", url: "#sectionFilter" },
    { name: "Beneficios", url: "#sectionBenefits" },
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between px-4 mt-5 space-x-4 md:px-20">
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

        <img
          className="w-40 lg:w-56"
          src="../../public/img/Logo_Licoctel_Color.webp"
          alt="Logo Licoctel"
        />

        <IconButton
          onClick={toggleMusic}
          aria-label="toggle music"
          className="text-customPurple hover:text-customGreen"
        >
          {isMusicOn ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </div>

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
              if (item.url.startsWith("#")) {
                scrollToSection(item.url.slice(1)); // Llama a scrollToSection para anclas
              } else {
                navigate(item.url); // Para rutas internas
              }
              handleMenuClose();
            }}
            className="text-customPurple hover:text-customGreen"
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Navbar;
