import React from "react";
import ServiceData from "../Service/ServiceData";

const CompNews2 = () => {
  return (
    <section className="blog_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 blog_sidebar_left">
            {ServiceData.News2.map((news2) => {
              return (
                <div className="blog_single mb_50">
                  <img
                    className="img-fluid"
                    src={require("../../img/" + news2.image)}
                    alt=""
                  />
                  <div className="blog_content">
                    <div className="post_date">
                      <h2>
                        <span>{news2.Year}</span>
                      </h2>
                    </div>
                    <h3 className="font-weight-bold t_color mb-30">
                      {news2.Title}
                    </h3>
                    <p className="ratakirkan">
                      (Unila): The 2022 Accounting Department Student Team made
                      the University of Lampung (Unila) proud at the 2022
                      International Science and Invention Fair (ISIF)
                      competition held by the Indonesian Young Scientist
                      Association (IYSA), November 1-5, 2022.Dimas Prayoga and
                      four team members, namely Pratama Satya Nugraha, Ramadhina
                      Aila Putri, Widia Lorenza, and Tirtha Melinda Suhartati,
                      won gold medals in the Social Science category through
                      Creading innovation products.
                    </p>
                    <p className="ratakirkan">
                      Creading is an application for providing business capital
                      through a crowdfunding system that provides information,
                      education, and funding services, digitally in one series.
                      This application can increase entrepreneurial interest in
                      youth as well as become an alternative to overcome the
                      problem of unemployment and poverty in Indonesia.
                    </p>

                    <p className="ratakirkan">
                      In the competition, Dimas and the team presented Creading
                      online via Zoom, witnessed by the judges. The presentation
                      was conducted in English for 15 minutes divided into two
                      sessions. The first session of the presentation lasted
                      eight minutes and seven minutes after the question and
                      answer with the judges. ISIF 2022 is IYSA's annual science
                      and innovation competition which is a learning platform,
                      accommodating and appreciating the innovations of active,
                      creative, and innovative students worldwide. In this
                      event, 614 teams from 32 countries were recorded to take
                      part in ISIF 2022 online and offline.
                    </p>
                    <p className="ratakirkan">
                      Dimas admitted that this activity provided valuable
                      experience for him and the team in terms of learning and
                      collaborating to explore their potential, and dare to
                      compete with participants from various countries around
                      the world. "Hopefully this competition can motivate others
                      to continue working and have the spirit of competing for a
                      better Unila," he said.
                    </p>
                    <p className="f_400 mb_40 ratakirkan"></p>
                    <p className="f_400 mb_40 ratakirkan"></p>
                    <p className="f_400 mb_40 ratakirkan"></p>
                    <p className="f_400 mb_40 ratakirkan"></p>
                    <p>
                      Source :
                      <a target="-blank" href={news2.LinkNews}>
                        Click Here
                      </a>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          ;
        </div>
      </div>
    </section>
  );
};

export default CompNews2;
