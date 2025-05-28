import React from "react";
import EventSponserLogo from "./EventSponserLogo";

const EventSponser = () => {
  return (
    <section className="event_sponser_area sec_pad">
      <div className="container">
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Organized By</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row ">
                  <EventSponserLogo image="iysa.png" />
                  <EventSponserLogo image="vokasi.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Afiliation</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  <EventSponserLogo url=".#" image="segi.png" />
                  <EventSponserLogo url=".#" image="redMex.jpeg" />
                  <EventSponserLogo url=".#" image="sola.jpeg" />
                  <EventSponserLogo url=".#" image="bangla.png" />
                  <EventSponserLogo url=".#" image="miica.png" />
                  <EventSponserLogo url=".#" image="milset.jpg" />
                  <EventSponserLogo url=".#" image="myso.png" />
                  <EventSponserLogo url=".#" image="esc.jpg" />
                  <EventSponserLogo url=".#" image="gatau.jpeg" />
                  <EventSponserLogo url=".#" image="ayrid.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventSponser;
