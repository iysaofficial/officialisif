import React from "react";
import ServiceData from "../Service/ServiceData";

const CompNews5 = () => {
  return (
    <section className="blog_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 blog_sidebar_left">
            {ServiceData.News5.map((news5) => {
              return (
                <div className="blog_single mb_50">
                  <img
                    className="img-fluid"
                    src={require("../../img/" + news5.image)}
                    alt=""
                  />
                  <div className="blog_content">
                    <div className="post_date">
                      <h2>
                        <span>{news5.Year}</span>
                      </h2>
                    </div>
                    <h3 className="font-weight-bold t_color mb-30">
                      {news5.Title}
                    </h3>
                    <p className="ratakirkan">
                      Udayana University (UNUD) hosted four prestigious national and international events, namely the International Science and Invention Fair (ISIF), Invention and Innovation Fair (IIF), National Research Teacher Competition (NRTC), and International Research Teacher Competition (IRTC) 2023.
                    </p>
                    <p className="ratakirkan">
                      ISIF, IIF, NRTC, and IRTC are organized by the Indonesian Young Scientist Association (IYSA), in collaboration with the Office of International Affairs (KUI) of Udayana University (UNUD).The implementation of these 4 (four) events was officially opened by the Vice Rector of UNUD, Prof. Dr. dr. I Putu Gede Adiatmika, M.Kes on Tuesday, November 7, 2023 yesterday at the Widya Sabha Auditorium Building, Jimbaran Campus.
                    </p>

                    <p className="ratakirkan">
                      President of IYSA, Deni Irawan, M.Pd, said that of the four events, ISIF was the largest and this time entered the 5th implementation. The purpose of holding this event is to provide opportunities for students and students to actualize the fields of Science, Technology or a second merger in order to compete globally and improve the competence of students.
                    </p>
                    <p className="ratakirkan">
                      The participants were 685 teams consisting of 421 online teams and 264 offline teams from 28 countries. 10 countries of which came directly to Bali, namely Kazakhstan, Uzbekistan, Hong Kong, Malaysia, Iran, Mexico, Romania, Singapore and Indonesia. While the rest follow online.
                    </p>
                    <p className="ratakirkan">
                      We always held ISIF in Bali, the first in 2019, then in 2020 and 2021 we held it online due to the pandemic, then last year we held it again, and this year in collaboration with KUI UNUD," said Deni when interviewed on Wednesday, November 8, 2023.Deni said that on November 8, 2023, a competition for research results from the junior high, high school and college levels was held. This activity starts from Tuesday, November 7, 2023."These four international events will display the work of students from the research process of students who will be assessed by Juries from various countries," he said.
                    </p>
                    <p className="ratakirkan">
                      Meanwhile, one of the teams from SMP Negeri 10 Denpasar consisting of Nimai Pandita Dasa, I Komang Satya Wijaya Putra and Pande Putu Adelia Daynera Agni admitted that they were enthusiastic about participating in the Science and Invention Fair (ISIF) event. As said by Nimai Pandita Dasa, it was an extraordinary experience to be able to take part in an international event by presenting several schools from various countries."This is a great experience for me and Tim, because I can exchange information with other schools," said Nimai.
                    </p>
                    <p className="ratakirkan"></p>
                    <p className="ratakirkan"></p>
                    <p>
                      Source :
                      <a target="-blank" href={news5.LinkNews}>
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

export default CompNews5;
