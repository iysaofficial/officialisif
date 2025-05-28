import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageSlider = () => {
  const images = [
    "/assets/images/slider/ISIF 2024-45.jpg",
    "/assets/images/slider/ISIF 2024-74.jpg",
    "/assets/images/slider/ISIF 2024-89.jpg",
    "/assets/images/slider/ISIF 2024-253.jpg",
    "/assets/images/slider/ISIF 2024-294.jpg",
    "/assets/images/slider/ISIF 2024-64.jpg",
    "/assets/images/slider/ISIF 2024-185.jpg",
    "/assets/images/slider/ISIF 2024-653.jpg",
    "/assets/images/slider/ISIF 2024-362.jpg",
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="my-4">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        arrows={false}
      >
        {images.map((src, index) => (
          <div key={index} className="px-1">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
