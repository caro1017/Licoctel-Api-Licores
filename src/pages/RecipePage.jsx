import { useState } from "react";

export const RecipePage = () => {
  const [zoomLevel, setZoomLevel] = useState(1); // Estado zoom inicial imagen
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Estado posicion inicial imagen
  
  // Función para manejar el movimiento del mouse sobre la imagen
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width;
    const y = (e.pageY - top) / height;
    setPosition({ x, y });
  };

  return (
    <>
      <div className="items-center justify-center mt-10 md:flex">
        <div className="w-[80%] md:w-[30%] relative overflow-hidden rounded-xl shadow-md">
          <img
            src="https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg"
            alt="Nombre del producto"
            className="transition-transform duration-500 transform "
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setZoomLevel(1.2)} // Cambia el nivel de zoom al entrar
            onMouseLeave={() => setZoomLevel(1)}
          />
        </div>
        <div className="md:w-[40%] md:ml-10 text-customPurple">
          <h2 className="text-2xl font-bold font-secondary">Nombre Coctel</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, vehicula
            litora eget placerat quis cum nullam, feugiat et libero id iaculis
            eu. Imperdiet duis ultricies nam porta consequat magnis volutpat
            curabitur vitae ornare viverra cursus, proin curae metus scelerisque
            nascetur aliquet mollis congue vestibulum cum sociis, ante magna
            etiam eleifend morbi nostra odio elementum vel habitasse massa.
          </p>
          <h3>Ingredientes</h3>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <h3>Preparación</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, vehicula
            litora eget placerat quis cum nullam, feugiat et libero id iaculis
            eu. Imperdiet duis ultricies nam porta consequat magnis volutpat
            curabitur vitae ornare viverra cursus, proin curae metus scelerisque
            nascetur aliquet mollis congue vestibulum cum sociis, ante magna
            etiam eleifend morbi nostra odio elementum vel habitasse massa.
          </p>
        </div>
      </div>
    </>
  );
};
