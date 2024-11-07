import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { fetchCategories } from "../services/api";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategoryList = () => {
  const { categories, setCategories } = useContext(AppContext);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, [setCategories]);

  const categoryImages = {
    Cocktail: "../../public/img/Cocktail.webp",
    "Ordinary Drink": "../../public/img/Ordinary_Drink.webp",
    "Punch / Party Drink": "../../public/img/Party_Drink.webp",
    Shake: "../../public/img/Shake.webp",
    "Other / Unknown": "../../public/img/Unknown.webp",
    Cocoa: "../../public/img/Cocoa.webp",
    Shot: "../../public/img/Shot.webp",
    "Coffee / Tea": "../../public/img/Coffee.webp",
    "Homemade Liqueur": "../../public/img/Liqueur.webp",
    Beer: "../../public/img/Beer.webp",
    "Soft Drink": "../../public/img/Soft_Drink.webp",
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div id="sectionCategory" className="my-10 category-list">
      {categories && categories.length > 0 ? (
        <div>
          <div className="ml-10 text-lg font-bold md:text-2xl">
            <h2 className="text-customPurple">Nuestras categorías</h2>
            <p className="mb-10 font-secondary text-customGreen">
              Explora nuestra variedad de Cocteles
            </p>
          </div>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            showDots={false}
            arrows={false}
          >
            {categories.map((category) => (
              <div
                key={category.strCategory}
                className="flex flex-col items-center"
              >
                <img
                  src={
                    categoryImages[category.strCategory] ||
                    "path_to_default_image.png"
                  }
                  alt={category.strCategory}
                  className="w-[120px] h-[120px] object-contain transition-transform duration-300 hover:scale-110"
                />
                <p className="mt-5 text-center">{category.strCategory}</p>
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <p>No hay categorías disponibles.</p>
      )}
    </div>
  );
};

export default CategoryList;
