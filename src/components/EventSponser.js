import React, { useState, useEffect } from "react";
import EventSponserLogo from "./EventSponserLogo";
import "./organized.css";

import logoFmipa from "../img/home-software/Logo FMIPA UI-10.png";
import logoIysa from "../img/home-software/LOGO IYSA FIX.png";

const organizers = [
  {
    id: "fmipa-ui",
    name: "FMIPA Universitas Indonesia",
    subtitle: "Faculty of Mathematics and Natural Sciences",
    logo: logoFmipa,
    alt: "Logo FMIPA UI",
    role: "Co-Organizer",
    description:
      "The Faculty of Mathematics and Natural Sciences at the Universitas Indonesia (FMIPA UI) is one of Indonesia’s leading institutions of higher education in the sciences, focusing on research excellence, scientific innovation, and collaboration to develop the potential of the younger generation.",
    website: "https://sci.ui.ac.id/",
  },
  {
    id: "iysa",
    name: "Indonesian Young Scientist Association (IYSA)",
    logo: logoIysa,
    alt: "Logo IYSA",
    role: "Organizer",
    description:
      "The Indonesian Young Scientist Association (IYSA) is an organization dedicated to fostering the scientific potential and innovation of Indonesian students and young scientists through exhibitions, research competitions, and science networking at both the national and international levels.",
    website: "https://iysa.or.id/",
  },
];

const EventSponser = () => {
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedOrganizer(null);
      }
    };

    if (selectedOrganizer) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedOrganizer]);

  return (
    <>
      <section className="event_sponser_area sec_pad">
        <div className="container">
          <div className="event_sponser_inner">
            <div className="event_sponser_item">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-4">
                  <h4 className="h_head sponser_title">Organized By</h4>
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className="organizer_logos_wrapper">
                    {organizers.map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        className="organizer_logo_btn"
                        onClick={() => setSelectedOrganizer(item)}
                        title={`Klik untuk info detail ${item.name}`}
                        aria-label={item.name}
                      >
                        <img
                          src={item.logo}
                          alt={item.alt}
                          className="organizer_logo_img"
                        />
                      </button>
                    ))}
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

      {/* Popup Modal */}
      {selectedOrganizer && (
        <div
          className="org_modal_overlay"
          onClick={() => setSelectedOrganizer(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="org-modal-title"
        >
          <div
            className="org_modal_box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="org_modal_header">
              <span className="org_modal_badge">{selectedOrganizer.role}</span>
              <button
                type="button"
                className="org_modal_close_btn"
                onClick={() => setSelectedOrganizer(null)}
                aria-label="Tutup popup"
              >
                &times;
              </button>
            </div>

            <div className="org_modal_body">
              <div className="org_modal_logo_preview">
                <img
                  src={selectedOrganizer.logo}
                  alt={selectedOrganizer.alt}
                />
              </div>

              <h3 id="org-modal-title" className="org_modal_title">
                {selectedOrganizer.name}
              </h3>
              <p className="org_modal_subtitle">
                {selectedOrganizer.subtitle}
              </p>
              <p className="org_modal_desc">
                {selectedOrganizer.description}
              </p>
            </div>

            <div className="org_modal_footer">
              <button
                type="button"
                className="org_modal_btn_cancel"
                onClick={() => setSelectedOrganizer(null)}
              >
                Tutup
              </button>
              <a
                href={selectedOrganizer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="org_modal_btn_visit"
              >
                Website Resmi <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventSponser;
