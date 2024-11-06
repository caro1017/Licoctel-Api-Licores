import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = () => {
  const carouselRef = useRef(null);
  const images = [
    "/public/img/carrusel_3.webp",
    "/public/img/carrusel_2.webp",
    "/public/img/carrusel_1.webp",
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="px-2 mt-5 md:px-10">
      <Carousel
        ref={carouselRef} // Asignar la referencia al carrusel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        showDots={false}
        arrows={true}
      >
        {images.map((img, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-90 md:h-[500px] rounded-xl shadow-md"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
