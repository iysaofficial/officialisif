import React from "react";
import Featuresitems from "./Features/Featuresitems";
const Timevenue = () => {
  return (
    <div className="body_wrapper">
      <section className="process_area bg_color sec_pad">
        <div className="container">
          <div className="features_info">
            <img
              className="dot_img"
              //   src={require("../img/home4/divider.png")}
              alt=""
            />
            <h2>Time Schedule</h2>
            {/* <div className="video_content">
              <div className="video">
                <a
                  className="popup-youtube video_icon"
                  target="-blink"
                  href="https://www.youtube.com/watch?v=DCw862udnZo"
                >
                  <i className="arrow_triangle-right"></i>
                </a>
              </div>
            </div> */}
            <Featuresitems
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="time.jpg"
            />
            <h2 className="mt-5">Venue</h2>
            {/* <div className="video_content">
              <div className="video">
                <a
                  className="popup-youtube video_icon"
                  target="-blink"
                  href="https://www.youtube.com/watch?v=YBhdvQ1p5xQ"
                >
                  <i className="arrow_triangle-right"></i>
                </a>
              </div>
            </div> */}
            <Featuresitems
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="venue.jpg"
            />
            <div className="dot middle_dot">
              <span className="dot1"></span>
              <span className="dot2"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Timevenue;
