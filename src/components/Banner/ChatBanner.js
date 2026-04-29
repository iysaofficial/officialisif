import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const images = [
  "/assets/images/2025/BG ui.png",
  "/assets/images/2025/ISIF 2025-49.jpg",
  "/assets/images/2025/ISIF 2025-22.jpg",
  "/assets/images/2025/ISIF 2025-382.jpg",
  "/assets/images/2025/nsif 3.jpg",
];

const ChatBanner = () => {

  return (
    <>
      <style>
        {`
          .custom-banner-img {
            height: 80vh;
            min-height: 400px;
            max-height: 500px;
            object-fit: cover;
            object-position: center;
          }
          .carousel-item-wrapper {
            overflow: hidden;
            position: relative;
          }
        `}
      </style>
      <Carousel fade={true} controls={false}>
        {images.map((imgSrc, index) => (
          <Carousel.Item key={index} interval={4000} className="text-center carousel-item-wrapper">
            <img
              className="d-block w-100 custom-banner-img"
              src={imgSrc}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption className="">
              <Link
                to="/Homeregist"
                className="btn btn-primary m-2"
              >
                Registration Here !
              </Link>
              <a
                className="btn btn-primary m-2"
                href="https://drive.google.com/drive/folders/1uqEaNikSPC6k1TDS3UYsIjw0Q-q9jSGm?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guide Book
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default ChatBanner;
