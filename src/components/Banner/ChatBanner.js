import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../img/background/img.WebP";
import image2 from "../../img/background/img2.WebP";
import image3 from "../../img/background/img3.WebP";

const ChatBanner = () => {
  const mystyle = {
    color: "white", 
    fontSize: "clamp(16px, 2vw, 32px)"
  };
  return (
    <Carousel fade={true}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 mr-3" src={image1} alt="ISIF" />
        <Carousel.Caption>
          <h1 className="fw-bold" style={mystyle}>Coming Soon 2025</h1>
          {/* <a
            className="btn-primary btn"
            href="/"
            rel="noopener noreferrer"
          >
            Close Registration!!
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image2} alt="IRTC" />
        <Carousel.Caption>
          <h1 style={mystyle}>Coming Soon 2025</h1>
          {/* <a
            className="btn-primary btn"
            href="/"
          >
            Close Registration!!
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image3} alt="NRTC" />
        <Carousel.Caption>
          <h1 style={mystyle}>Coming Soon 2025</h1>
          {/* <a
            className="btn-primary btn"
            href="/"
          >
            Close Registration!!
          </a> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ChatBanner;
