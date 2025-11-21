import React from "react";
import Carousel from "react-bootstrap/Carousel";

const images = [
  "/assets/images/2025/ISIF 2025-49.jpg",
  "/assets/images/2025/ISIF 2025-22.jpg",
  "/assets/images/2025/ISIF 2025-382.jpg",
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
          <Carousel.Caption className="">
            <a
              className="btn btn-primary m-2"
              rel="noopener noreferrer"
            >
              Coming Soon Next Year
            </a>
            <a
              className="btn btn-primary m-2"
              href="https://drive.google.com/file/d/16NbKYbNW9Ni621NUoLZm0M32tkShUruh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guide Book
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ChatBanner;
