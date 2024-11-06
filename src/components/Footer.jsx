import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export const Footer = () => {
  return (
    <footer className="bg-customPurple text-customCream py-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        
       
        <div className="text-4xl font-bold">
          <img src={"/public/img/Logo_Licoctel_BL.webp"} alt="Licoctel Logo" className="w-32 mx-auto" />
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="font-semibold text-lg">¡Descubre aún más!</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Recetas de Cocteles</a></li>
              <li><a href="#" className="hover:underline">Tarjetas de regalo</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Acerca de nosotros</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Sobre nosotros</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Datos de contacto</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Ubicación</a></li>
              <li><a href="#" className="hover:underline">Email</a></li>
            </ul>
          </div>
        </div>

      
        <Box className="flex space-x-4">
          <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-customGreen hover:text-customGreen hover:bg-customPurple rounded-full"
            sx={{ '&:hover': { transform: 'scale(1.1)' }, transition: 'transform 0.2s' }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-customGreen hover:text-customGreen hover:bg-customPurple rounded-full"
            sx={{ '&:hover': { transform: 'scale(1.1)' }, transition: 'transform 0.2s' }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://wa.me/your_number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-customGreen hover:text-customGreen  hover:bg-customPurple rounded-full"
            sx={{ '&:hover': { transform: 'scale(1.1)' }, transition: 'transform 0.2s' }}
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
        </Box>

       
        <div className="text-center text-sm px-4">
          <p>El exceso de alcohol es perjudicial para la salud. Ley 30 de 1986. Prohíbase el expendio de bebidas embriagantes a menores de edad y mujeres embarazadas. Ley 124 de 1994.</p>
        </div>

     
        <div className="text-center text-sm border-t border-customCream mt-4 pt-4">
          <p>Copyright 2024 by Carolina Uribe Botero | Angela Rosero | Eliana Paredes</p>
        </div>
      </div>
    </footer>
  )
}
