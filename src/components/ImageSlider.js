import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageSlider = () => {
  const images = [
    "/assets/images/2025/ISIF 2025-22.jpg",
    "/assets/images/2025/ISIF 2025-25.jpg",
    "/assets/images/2025/ISIF 2025-232.jpg",
    "/assets/images/2025/ISIF 2025-243.jpg",
    "/assets/images/2025/ISIF 2025-319.jpg",
    "/assets/images/2025/ISIF 2025-334.jpg",
    "/assets/images/2025/ISIF 2025-396.jpg",
    "/assets/images/2025/ISIF 2025-402.jpg",
    "/assets/images/2025/ISIF 2025-122.jpg",
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
      items: 2,
    },
  };

  return (
    <>
      <style>
        {`
          /* ===== DEFAULT / DESKTOP (unchanged) ===== */
          .slider-image {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 12px;
          }
          .slider-item {
            padding: 0 4px;
          }

          /* ========== TABLET (641px - 1023px) ========== */
          @media (max-width: 1023px) {
            .slider-image {
              height: 120px;
              border-radius: 10px;
            }
          }

          /* ========== MOBILE (≤640px) ========== */
          @media (max-width: 640px) {
            .slider-image {
              height: 100px;
              border-radius: 8px;
            }
            .slider-item {
              padding: 0 3px;
            }
          }
        `}
      </style>
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
            <div key={index} className="slider-item">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ImageSlider;

