export const Benefits = () => {
    const benefits = [
      {
        title: "Asesoría en Línea",
        description: "Resuelve tus dudas con nosotros.",
        imgSrc: "https://th.bing.com/th/id/OIP.j6D-GfTXlZ0BVUW4G4Lc1wAAAA?rs=1&pid=ImgDetMain",
        imgAlt: "Icono mujer con audífonos",
      },
      {
        title: "Filtrar Recetas",
        description: "Filtra tus cócteles favoritos.",
        imgSrc: "https://th.bing.com/th/id/OIP.j6D-GfTXlZ0BVUW4G4Lc1wAAAA?rs=1&pid=ImgDetMain",
        imgAlt: "Icono mujer con audífonos",
      },
      {
        title: "Buscar Recetas",
        description: "Busca tus cócteles favoritos.",
        imgSrc: "https://th.bing.com/th/id/OIP.j6D-GfTXlZ0BVUW4G4Lc1wAAAA?rs=1&pid=ImgDetMain",
        imgAlt: "Icono mujer con audífonos",
      },
    ];
  
    return (
      <div className="flex flex-col items-center p-6">
        <h1 className="mb-12 text-4xl font-bold text-center font-secondary text-customPurple">
          Nuestros Beneficios
        </h1>
  
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white border-r-4 border-gray-300 rounded-lg shadow-lg hover:shadow-2xl"
            >
              <img
                src={benefit.imgSrc}
                alt={benefit.imgAlt}
                className="w-24 h-24 mb-4 rounded-full"
              />
              <h2 className="mb-4 text-2xl font-semibold text-customPurple">
                {benefit.title}
              </h2>
              <p className="text-center text-customPurple">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
