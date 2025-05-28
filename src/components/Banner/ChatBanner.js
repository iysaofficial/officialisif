import React from "react";
import Carousel from "react-bootstrap/Carousel";

const images = [
  "/assets/images/slider/ISIF 2024-89.jpg",
  "/assets/images/slider/ISIF 2024-58.jpg",
  "/assets/images/slider/ISIF 2024-185.jpg",
];

const ChatBanner = () => {
  const mystyle = {
    color: "black",
    fontSize: "clamp(14px, 4vw, 32px)",
    objectFit: "cover",
    fontweight: "800",
  };

  return (
    <Carousel fade={true} controls={false}>
      {images.map((imgSrc, index) => (
        <Carousel.Item key={index} interval={2000} className="text-center">
          <img
            className="d-block w-100"
            src={imgSrc}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption className="custom-caption">
            <h1 className="fw-bold" style={mystyle}>
              Coming Soon 2025
            </h1>
            {/* <a
              className="btn btn-primary mt-3"
              href="/homeregist"
              rel="noopener noreferrer"
            >
              Regist Here
            </a> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ChatBanner;
