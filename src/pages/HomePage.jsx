import FilterCustom from "../components/FilterCustom";
import MultiCarousel from "../components/MultiCarousel";
import CategoryList from "../components/CategoryList";
import RecipeCard from "../components/RecipeCard";
import { Benefits } from "../components/Benefits";

export const HomePage = () => {
  return (
    <>
      <MultiCarousel />
      <CategoryList />
      <FilterCustom />
      <RecipeCard />
      <Benefits />
    </>
  );
};
