import { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import { fetchCategories, fetchCocktailsByCategory } from "../services/api";
import RecipeCard from "./RecipeCard";

export default function FilterCustom() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Definimos fetchRandomCocktails usando useCallback para evitar recrear la función en cada renderizado
  const fetchRandomCocktails = useCallback(async () => {
    try {
      const randomDrinks = await fetchCocktailsByCategory("Ordinary Drink"); // Carga inicial de recetas aleatorias
      setRecipes(randomDrinks);
    } catch (error) {
      console.error("Error fetching random cocktails:", error);
    }
  }, []); // Sin dependencias para mantener la referencia estable

  useEffect(() => {
    // Cargar categorías al montar el componente
    const loadCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData.map((cat) => cat.strCategory));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    loadCategories();
    fetchRandomCocktails();
  }, [fetchRandomCocktails]); // Solo ejecuta al montar gracias a la dependencia vacía de fetchRandomCocktails

  const handleFilterClick = async (category) => {
    setSelectedCategory(category);
    try {
      const filteredDrinks = await fetchCocktailsByCategory(category);
      setRecipes(filteredDrinks); // Actualiza las recetas basadas en el filtro seleccionado
    } catch (error) {
      console.error("Error fetching cocktails by category:", error);
    }
  };
  return (
    <div className="p-6" id="sectionFilter">
      <div className="text-lg font-bold md:text-2xl ml-7 md:ml-5">
        <h2 className="text-customPurple">Nuestros Filtros</h2>
        <p className="mb-10 font-secondary text-customGreen">
          Filtra los cócteles según tu necesidad
        </p>
      </div>

      {/* Contenedor de botones con flex-wrap y centrado */}
      <div className="flex flex-wrap justify-center gap-3 md:justify-start">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category ? "contained" : "outlined"}
            className={`px-4 py-2 text-xs rounded-full ${
              selectedCategory === category
                ? "bg-customPurple text-customCream"
                : "border-gray-300 text-customPurple"
            } hover:bg-customGreen`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Pasar las recetas filtradas o aleatorias a RecipeCard */}
      <RecipeCard recipes={recipes} />
    </div>
  );
}
