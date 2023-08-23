import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../img/background/bg_1.jpg";
import image2 from "../../img/background/bg_2.jpg";
import image3 from "../../img/background/bg_3.jpg";

const ChatBanner = () => {
  const mystyle = {
    color: "white",
  };
  return (
    <Carousel fade={true}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 mr-3" src={image1} alt="ISIF" />
        <Carousel.Caption>
          <a
            className="btn-primary btn"
            href="https://bit.ly/REGISTRATION_ISIF_2023"
            target="-blank"
          >
            Registration Here
          </a>
          <h3 style={mystyle}>International Science And Invention Fair</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image2} alt="IRTC" />
        <Carousel.Caption>
          <a
            className="btn-primary btn"
            href="https://bit.ly/REGISTRATION_ISIF_2023"
            target="-blank"
          >
            Registration Here
          </a>
          <h3 style={mystyle}>International Science And Invention Fair</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image3} alt="NRTC" />
        <Carousel.Caption>
          <a
            className="btn-primary btn"
            href="https://bit.ly/REGISTRATION_ISIF_2023"
            target="-blank"
          >
            Registration Here
          </a>
          <h3 style={mystyle}>International Science And Invention Fair</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ChatBanner;
