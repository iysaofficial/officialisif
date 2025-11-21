import React from "react";
import Sectitle from "../components/Title/Sectitle";

const video = () => {
  return (
    <section className="video_area bg_color sec_pad">
      <div className="container">
        <Sectitle
          Title="AFTER EVENT 2025"
          Title1="INTERNATIONAL SCIENCE AND INVENTION FAIR 2025"
          Title2="The International Science and Invention Fair or ISIF was the first event organized by IYSA in 2019.
          2025 became the 7th year we organized ISIF and until this year ISIF is still an event that is very
          attractive to young researchers. The enthusiasm of young researchers is evidenced by the large number
          of participants who registered at this event, there were around 717 teams from 24 countries who
          participated in this event both online and offline."
          Title3="In collaboration with Vokasi Diponerogo University and İzmir International Innovation Science Energy Engineering Fair İzmiriiseef, IYSA has successfully organized ISIF for the 7th time which we held in a hybrid manner in Bali. The series of ISIF activities this time we carried out together with 4 other events namely NSIF, WSO, NRTC, and IRTC."
          Title4=""
          Title7=""
          Title8="Thank you to all teams who have participated in ISIF 2025 and congratulations to all winners.
          Keep innovating and developing yourself because the future is still waiting for you. See you in ISIF 2026!"
          tClass="t_color3"
          sClass="sec_title text-center mb_70"
        />
        <div className="video_content">
          <div className="video_info">
            <div className="ovarlay_color"></div>
            <a
              className="popup-youtube video_icon"
              target="-blank"
              href="https://www.youtube.com/embed/F9ApBr_8UP0?si=wcPKQ_34DD4wdUY9"
            >
              <i className="arrow_triangle-right"></i>
            </a>
            <h2>ISIF</h2>
          </div>
          <img
            className="video_leaf"
            src={require("../img/new/leaf.png")}
            alt=""
          />
          <img className="cup" src={require("../img/new/cup.png")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default video;
