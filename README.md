# 🥂 Licoctel: Encuentra y Disfruta el Cóctel Perfecto

Licoctel es un software diseñado para ofrecer una experiencia única al usuario, permitiéndole explorar una amplia variedad de recetas de cócteles con una interfaz intuitiva y amigable. Con un diseño visual atractivo y funcionalidades interactivas, Licoctel es la solución ideal para quienes desean descubrir, filtrar y aprender a preparar cócteles fácilmente.

![Imagen Proyecto](https://i.postimg.cc/bwsmXPhV/Mockup.webp)

## 🚀 Tecnologías y Librerías Utilizadas

- **React**: Framework de JavaScript para construir la interfaz de usuario de manera rápida y eficiente.
- **Tailwind CSS**: [URL de Tailwind](https://tailwindcss.com/) - Para estilizar la interfaz de forma rápida y eficaz.
- **Material UI**: [URL de Material UI](https://mui.com/) - Componentes adicionales para mejorar el diseño visual.
- **React Multi Carousel**: [URL de React Multi Carousel](https://www.npmjs.com/package/react-multi-carousel) - Carrusel de imágenes adaptable para las categorías y recetas.
- **React Router Dom**: [URL de React Router Dom](https://www.npmjs.com/package/react-router-dom) - Navegación entre las diferentes secciones de la app.
- **Axios**: [URL de Axios](https://www.npmjs.com/package/react-axios) - Para consumir datos de APIs de forma simple.

## 🌐 API Utilizada

Consumimos la API de [The Cocktail DB](https://www.thecocktaildb.com/api.php), que proporciona una variedad de recetas de cócteles con detalles sobre sus ingredientes, preparación y más.

## 🎨 Diseño

El diseño de Licoctel fue creado en Figma y puedes revisarlo en el siguiente enlace: [Diseño en Figma](https://www.figma.com/design/S1f4nw2OqYRGSFbXmo0Iu5/Licoctel?node-id=0-1&node-type=canvas&t=2NSFsW67dDmrSva9-0).

## 🌍 Despliegue

Licoctel está desplegado en Vercel. Visita la aplicación en vivo aquí: [Licoctel en Vercel](URL_DE_DESPLIEGUE_EN_VERCEL).

## 💡 Problemas que Aborda el Proyecto

1. **Interfaz Gráfica Amigable**: Un diseño pensado para que el usuario se sienta cómodo navegando por las distintas recetas de cócteles.
2. **Diseño Responsivo**: Adaptación total de la interfaz en dispositivos móviles, tabletas y pantallas de escritorio.
3. **Consumo e Interacción Adecuada de la API**: Implementación de las llamadas a la API de manera eficiente para que el usuario tenga siempre acceso a la información sin interrupciones.
4. **Manejo de SCRUM**: Nuestro equipo ha seguido un enfoque ágil (SCRUM) para la planificación y desarrollo del proyecto, garantizando entregas continuas y mejoras.

## 👥 Autores

- **Angela Rosero**  (Developer) - [GitHub](https://github.com/Angelarose-19)
- **Eliana Paredes**  (Developer) - [GitHub](https://github.com/Eli0024)
- **Carolina Uribe Botero** (Developer - Líder) - [GitHub](https://github.com/caro1017)

## ⚙️ Configuración y Ejecución del Proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/caro1017/Licoctel-Api-Licores
cd licoctel
```

### 2. Instalación de Dependencias

Para instalar todas las dependencias necesarias, ejecuta

```bash
npm install
```

### 3. Variables de Entorno

Para interactuar con la API, crea un archivo .env en la raíz del proyecto con las siguientes variables:

```bash
REACT_APP_API_URL=https://www.thecocktaildb.com/api/json/v1/1/
```

### 4. Ejecución en Desarrollo

Para correr el proyecto en el entorno de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

Accede a http://localhost:3000 en tu navegador para ver la aplicación en acción.

### 5. Construcción para Producción

Para construir el proyecto para producción:

```bash
npm run build
```

Esto generará una carpeta build con los archivos optimizados y listos para desplegar.
