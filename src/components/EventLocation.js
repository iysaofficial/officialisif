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
                Jl. Kemang RT 03 RW 06
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
                href="https://api.whatsapp.com/send/?phone=6288213248890&text&type=phone_number&app_absent=0"
                target="-target"
              >
                +62 882-1324-8890
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventLocation;
