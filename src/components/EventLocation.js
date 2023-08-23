import React from "react";
import Map from "./Map";
const EventLocation = () => {
  return (
    <section className="event_location_area">
      <Map />
      <div className="container">
        <div className="event_location">
          <div className="contact_info_item">
            <h6>Our Office</h6>
            <p>
              <a href="https://goo.gl/maps/9x18coXGCmSscKec6" target="blank">
                Jl. Kemang No. 63 RT 03 RW 06
                <br />
                Pasir Putih, Depok, Jawa Barat 16519, Indonesia.
              </a>
            </p>
          </div>
          <div className="contact_info_item">
            <h6>Contact Info</h6>
            <p>
              <a href="mailto:isifofficial.iysa@gmail.com">
                isifofficial.iysa@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://api.whatsapp.com/send/?phone=6281770914129&text&type=phone_number&app_absent=0"
                target="-target"
              >
                +62 817-7091-4129
              </a>
            </p>
          </div>
          {/* <div className="f_social_icon_two">
            <a href="/#">
              <i className="ti-facebook"></i>
            </a>
            <a href="/#">
              <i className="ti-instagram"></i>
            </a>
            <a href="/#">
              <i className="ti-whatsapp-alt"></i>
            </a>
            <a href="/#">
              <i className="ti-gmail-alt"></i>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default EventLocation;
