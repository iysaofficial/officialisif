import React from "react";
import ServiceData from "../Service/ServiceData";

const CompNews1 = () => {
  return (
    <section className="blog_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 blog_sidebar_left">
            {ServiceData.News1.map((news1) => {
              return (
                <div className="blog_single mb_50">
                  <img
                    className="img-fluid"
                    src={require("../../img/" + news1.image)}
                    alt=""
                  />
                  <div className="blog_content">
                    <div className="post_date">
                      <h2>
                        <span>{news1.Year}</span>
                      </h2>
                    </div>
                    <h3 className="font-weight-bold t_color mb-30">
                      {news1.Title}
                    </h3>
                    <p className="f_400 mb-30 ratakirkan">
                      This event was attended by participants from 11 countries
                      to display the results of research or the work of students
                      and students in the fields of science, technology, or the
                      combination of the two. Eleven countries participated in
                      this event, namely Indonesia as the host, Malaysia,
                      Vietnam, Thailand, the Philippines, Taiwan, Korea, Turkey,
                      Turkmenistan, Germany, and Zambia. While many participants
                      were from Indonesia as many as 101 groups, while from
                      abroad as many as 46 participants.
                    </p>
                    <p className="f_400 mb-30 ratakirkan">
                      Not to forget, as the venue for this event, Bali also
                      participated. A total of 27 groups from 147 groups
                      participated were representatives of Balinese students and
                      students. The participants from Bali are SMPN 10 Denpasar
                      4 works, SMPN 3 Denpasar 1 work, SMAN 1 Kuta 3 works, SMAN
                      1 Denpasar 2 works, SMAN 1 Memngwi 1 work, SMAN 3 Denpasar
                      7 works, SMAN 4 Denpasar 3 works, SMAN 7 Denpasar 3 works,
                      SMAN 8 Denpasar 1 work, SMA Kristen Harapan Denpasar 1
                      work, Mahasaraswati University 1 work.
                    </p>
                    <p className="f_400 mb_40 ratakirkan">
                      Chairman of the Indonesian Young Scientist Association
                      (IYSA) Denny Indrayana said this ISIF was the first time
                      it had been implemented. To participate in this event, his
                      party received more than 200 works which were then
                      selected to be able to participate in this event. "Some
                      works are selected at the national level and some are
                      directly listed without selection because their works
                      deserve to be displayed at the international level," said
                      Denny. Head of the Denpasar City Youth Education and
                      Sports Office, I Wayan Gunawan hopes that this activity
                      will be able to open the horizons of students in Denpasar
                      City and in Bali to conduct research. "The work displayed
                      by the participants' younger siblings is extraordinary.
                      Hopefully with the interaction of these researchers, those
                      of us in Denpasar City can develop and open our horizons
                      to innovate more for the advancement of Denpasar," he
                      said.
                    </p>

                    <p>
                      Source :
                      <a target="-blank" href={news1.LinkNews}>
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

export default CompNews1;
