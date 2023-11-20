import React from 'react';
import Sectitle from '../components/Title/Sectitle';

const video = () => {
  return (
    <section className="video_area bg_color sec_pad">
      <div className="container">
        <Sectitle
          Title="AFTER EVENT 2023"
          Title1="INTERNATIONAL SCIENCE AND INVENTION FAIR 2023"
          Title2="The International Science and Invention Fair or ISIF was the first event organized by IYSA in 2019.
          2023 became the 5th year we organized ISIF and until this year ISIF is still an event that is very
          attractive to young researchers. The enthusiasm of young researchers is evidenced by the large number
          of participants who registered at this event, there were around 676 teams from 22 countries who
          participated in this event both online and offline."
          Title3="In collaboration with Udayana University and ITS Actuarial Department, IYSA has successfully
          organized ISIF for the 5th time which we held in a hybrid manner in Bali. The series of ISIF activities
          this time we carried out together with 3 other events namely IIF at the National level, NRTC, and IRTC.
          There were about 264 teams that came directly to the venue from 10 countries (Malaysia, Mexico,
          Turkmenistan, Romania, Vietnam, Thailand, Kazakhstan, Hong Kong, Iran, and Indonesia)."
          Title4=""
          // Title5="ISIF 2022 has been held for 5 days from the opening ceremony and booth set-up on November 1, 2022, online and offline judging session on November 2, 2022, inventors talk and webinar with Mr. Made Windu Antara Kesiman, S.T., M.SC., PH.D, awarding ceremony on November 4, 2022, and excursion on the last day on November 5, 2022."
          // Title6="We visited several places in Bali such as Ulun Danu Beratan Temple, Secret Garden Bedugul, the Krisna Gift and Souvenir Center and the last destinastion, dinner and watched Kecak and Fire Dance in Jimbaran Beach."
          Title7=""
          Title8="Thank you to all teams who have participated in ISIF 2023 and congratulations to all winners.

          Keep innovating and developing yourself because the future is still waiting for you. See you in ISIF 2024!"
          tClass="t_color3"
          sClass="sec_title text-center mb_70"
        />
        <div className="video_content">
          <div className="video_info">
            <div className="ovarlay_color"></div>
            <a
              className="popup-youtube video_icon"
              target="-blank"
              href="https://www.youtube.com/embed/9rTOH_jqUeY?si=qTJixwQgY0BL2gPM"
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
