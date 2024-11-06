{/* Aqui va la importacion Carousel.jsx  */}
{/* Aqui va la importacion CategoryList.jsx   */}
import FilterCustom from "../components/FilterCustom"
import MultiCarousel from "../components/MultiCarousel"
import CategoryList from "../components/CategoryList"
import RecipeCard from "../components/RecipeCard"
{/* Aqui va la importacion Filter.jsx    */}
{/* Aqui va la importacion RecipeCard.jsx    */}
{/* Aqui va la importacion Benefits.jsx    */}



export const HomePage = () => {
  return (
    <>
    {/* Aqui va el componente Carousel.jsx  */}
    {/* Aqui va el componente CategoryList.jsx  */}
    <MultiCarousel/>
    <CategoryList/>
  <FilterCustom/>   
    {/* Aqui va el componente  Filter.jsx  */}
    <RecipeCard/>
    {/* Aqui va el componente  Benefits.jsx   */}  
    </>
  )
}
