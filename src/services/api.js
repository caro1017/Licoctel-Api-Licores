import axios from "axios";

// Base URL de la API
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

// Función para obtener categorías
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}list.php?c=list`);
    console.log("Response data:", response.data); // Muestra toda la respuesta de la API
    return response.data.drinks;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Función para buscar cócteles por nombre
export const searchCocktailsByName = async (name) => {
  const response = await axios.get(`${BASE_URL}search.php?s=${name}`);
  return response.data.drinks;
};

// Función para filtrar cócteles por categoría
export const fetchCocktailsByCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}filter.php?c=${category}`);
  return response.data.drinks;
};

// Función para obtener los detalles completos de una receta
export const fetchRecipeDetails = async (idDrink) => {
  try {
    const response = await axios.get(`${BASE_URL}lookup.php?i=${idDrink}`);
    return response.data.drinks ? response.data.drinks[0] : null;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};
