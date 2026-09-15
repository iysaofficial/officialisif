import React, { Component } from "react";

class EventSponserLogo extends Component {
  render() {
    let { image, imgStyle, colClass } = this.props;
    let imageSrc = "";
    try {
      if (image && (image.startsWith("/") || image.startsWith("http"))) {
        imageSrc = image;
      } else {
        imageSrc = require("../img/home-software/" + image);
      }
    } catch (e) {
      imageSrc = `/assets/images/2025/${image}`;
    }

    return (
      <div className={colClass || "col-lg-3 col-sm-4 col-6"}>
        <div className="analytices_logo wow fadeInUp">
          <img
            src={imageSrc}
            alt=""
            style={imgStyle}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      </div>
    );
  }
}
export default EventSponserLogo;
