import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const RecipeCard = () => {
  const recipes = [
    {
      id: 1,
      name: "Mojito",
      description: "Un cóctel refrescante con menta y ron.",
      image:
        "https://th.bing.com/th/id/OIP.XJ-PSOgTYaJq7KDk-wBqzAHaHa?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="md:w-[70%] grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 md:ml-32">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          className="overflow-hidden transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-105"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={recipe.image}
              alt={recipe.name}
              className="object-cover w-full h-auto mx-auto"
            />
          </CardActionArea>
          <CardContent className="p-4">
            <Typography
              variant="h6"
              component="h3"
              className="text-center text-gray-800"
            >
              {recipe.name}
            </Typography>
            <Typography
              variant="body2"
              className="mt-2 text-center text-gray-600"
            >
              {recipe.description}
            </Typography>
            <Button
              variant="contained"
              className="block px-10 py-2 mx-auto mt-4 focus:outline-none bg-customGreen text-customPurple"
            >
              Ver Receta
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RecipeCard;
