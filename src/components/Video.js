import React from 'react';
import Sectitle from '../components/Title/Sectitle';

const video = () => {
  return (
    <section className="video_area bg_color sec_pad">
      <div className="container">
        <Sectitle
          Title="AFTER EVENT 2024"
          Title1="INTERNATIONAL SCIENCE AND INVENTION FAIR 2024"
          Title2="The International Science and Invention Fair or ISIF was the first event organized by IYSA in 2019.
          2024 became the 6th year we organized ISIF and until this year ISIF is still an event that is very
          attractive to young researchers. The enthusiasm of young researchers is evidenced by the large number
          of participants who registered at this event, there were around 973 teams from 24 countries who
          participated in this event both online and offline."
          Title3="In collaboration with Vokasi Diponerogo University and ITS Actuarial Department, IYSA has successfully
          organized ISIF for the 6th time which we held in a hybrid manner in Bali. The series of ISIF activities
          this time we carried out together with 3 other events namely WSO, NRTC, and IRTC.
          There were about 394 teams that came directly to the venue from 12 countries (Romania, Czech Republik, Malaysia, Pakistan,Turkmenistan, Mexico, Philippines, Bangladesh, Russia, dan Indonesia)."
          Title4=""
          // Title5="ISIF 2022 has been held for 5 days from the opening ceremony and booth set-up on November 1, 2022, online and offline judging session on November 2, 2022, inventors talk and webinar with Mr. Made Windu Antara Kesiman, S.T., M.SC., PH.D, awarding ceremony on November 4, 2022, and excursion on the last day on November 5, 2022."
          // Title6="We visited several places in Bali such as Ulun Danu Beratan Temple, Secret Garden Bedugul, the Krisna Gift and Souvenir Center and the last destinastion, dinner and watched Kecak and Fire Dance in Jimbaran Beach."
          Title7=""
          Title8="Thank you to all teams who have participated in ISIF 2022 and congratulations to all winners.

          Keep innovating and developing yourself because the future is still waiting for you. See you in ISIF 2025!"
          tClass="t_color3"
          sClass="sec_title text-center mb_70"
        />
        <div className="video_content">
          <div className="video_info">
            <div className="ovarlay_color"></div>
            <a 
              className="popup-youtube video_icon"
              target="-blank"
              href="https://www.youtube.com/embed/HR3SUeO1oaw?si=O7mw_XQRtGK-ov6h"
            >
              <i className="arrow_triangle-right"></i>
            </a>
            <h2>ISIF</h2>
          </div>
          <img
            className="video_leaf"
            src={require('../img/new/leaf.png')}
            alt=""
          />
          <img
            className="cup"
            src={require('../img/new/cup.png')}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default video;
