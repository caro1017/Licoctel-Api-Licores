/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { fetchRecipeDetails } from "../services/api";

const RecipeCard = ({ recipes = [] }) => {
  const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Función para abrir el modal con la receta seleccionada
  const handleOpen = async (recipe) => {
    const detailedRecipe = await fetchRecipeDetails(recipe.idDrink);
    setSelectedRecipe(detailedRecipe);
    setOpen(true);
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div id="recipeSection" className="grid gap-6 p-6 md:grid-cols-4">
      {recipes.map((recipe) => (
        <Card
          key={recipe.idDrink}
          className="overflow-hidden transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-105"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={recipe.strDrinkThumb}
              alt={recipe.strDrink}
              className="object-cover w-full mx-auto h-80"
            />
          </CardActionArea>
          <CardContent className="p-4">
            <Typography
              variant="h6"
              component="h3"
              className="text-center text-gray-800"
            >
              {recipe.strDrink}
            </Typography>
            <Typography
              variant="body2"
              className="mt-2 text-center text-gray-600"
            >
              {recipe.strInstructions || "Disfruta de esta bebida refrescante"}
            </Typography>
            <Button
              variant="contained"
              className="block px-10 py-2 mx-auto mt-4 focus:outline-none bg-customGreen text-customPurple"
              onClick={() => handleOpen(recipe)} // Abrir el modal
            >
              Ver Receta
            </Button>
          </CardContent>
        </Card>
      ))}

      {/* Modal de la receta */}
      <Dialog open={open} onClose={handleClose}>
        <div>
          <DialogActions>
            <IconButton
              onClick={handleClose}
              color="primary"
              className=" text-customPurple hover:text-customGreen"
            >
              <CloseIcon />
            </IconButton>
          </DialogActions>

          <DialogTitle className="text-4xl font-bold text-center font-secondary text-customPurple ">
            {selectedRecipe?.strDrink || "Receta no disponible"}
          </DialogTitle>
        </div>

        <div>
          <DialogContent className="p-6 bg-white">
            <div className="flex flex-col items-center text-customPurple ">
              <div>
                <img
                  src={selectedRecipe?.strDrinkThumb || "default-image.jpg"}
                  alt={selectedRecipe?.strDrink || "Receta desconocida"}
                  className="object-cover w-48 h-48 mb-4 rounded-lg"
                />
              </div>
              <div className="ml-10">
                <Typography variant="body1" className="mb-4">
                  {selectedRecipe?.strInstructions || "No disponible"}
                </Typography>
                <Typography variant="body2" className="mb-4">
                  <strong className="font-bold">Ingredientes:</strong>
                  <ul>
                    {selectedRecipe &&
                      Object.keys(selectedRecipe)
                        .filter(
                          (key) =>
                            key.includes("strIngredient") && selectedRecipe[key]
                        )
                        .map((ingredientKey, index) => (
                          <li key={index}>
                            {selectedRecipe[ingredientKey]}{" "}
                            {selectedRecipe[`strMeasure${index + 1}`] &&
                              ` - ${selectedRecipe[`strMeasure${index + 1}`]}`}
                          </li>
                        ))}
                  </ul>
                </Typography>
                <Typography variant="body2">
                  <strong>Preparación:</strong>{" "}
                  {selectedRecipe?.strInstructions || "No disponible"}
                </Typography>
              </div>
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default RecipeCard;
