import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const images = [
  "https://res.cloudinary.com/dtik1z1qd/image/upload/v1776839867/BG_ui_hvuc8p.png",
  "/assets/images/2025/ISIF 2025-49.jpg",
  "/assets/images/2025/ISIF 2025-22.jpg",
  "https://res.cloudinary.com/dtik1z1qd/image/upload/v1776840247/nsif_3_dc8pjp.jpg",
  "/assets/images/2025/ISIF 2025-49.jpg",
  "/assets/images/2025/ISIF 2025-382.jpg",
  "/assets/images/2025/nsif 3.jpg",
];

const ChatBanner = () => {
  return (
    <>
      <style>
        {`
          /* ===== DEFAULT / DESKTOP ===== */
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

          /* ========== TABLET (481px - 1023px) ========== */
          @media (max-width: 1023px) {
            .custom-banner-img {
              height: clamp(300px, 50vw, 450px);
              min-height: unset;
              max-height: unset;
            }
            .banner-carousel .carousel-caption {
              bottom: 10%;
              left: 50%;
              right: auto;
              transform: translateX(-50%);
              width: 90%;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 10px;
              padding: 0;
            }
            .banner-carousel .carousel-caption .btn {
              font-size: 0.95rem;
              padding: 10px 22px;
              border-radius: 6px;
              white-space: nowrap;
              min-width: 160px;
              text-align: center;
            }
          }

          /* ========== MOBILE (≤480px) ========== */
          @media (max-width: 480px) {
            .custom-banner-img {
              height: clamp(200px, 65vw, 300px);
              object-fit: contain;
            }
            .banner-carousel .carousel-caption {
              bottom: 8%;
              flex-direction: row;
              gap: 6px;
            }
            .banner-carousel .carousel-caption .btn {
              font-size: 0.7rem;
              padding: 6px 12px;
              min-width: auto;
            }
            .banner-carousel .carousel-indicators {
              bottom: 2%;
            }
            .banner-carousel .carousel-indicators button {
              width: 8px;
              height: 8px;
              border-radius: 50%;
              margin: 0 3px;
            }
          }
        `}
      </style>
      <Carousel fade={true} controls={false} className="banner-carousel">
        {images.map((imgSrc, index) => (
          <Carousel.Item key={index} interval={4000} className="text-center carousel-item-wrapper">
            <img
              className="d-block w-100 custom-banner-img"
              src={imgSrc}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
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

