import React from "react";
import ServiceData from "../Service/ServiceData";

const CompNews4 = () => {
  return (
    <section className="blog_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 blog_sidebar_left">
            {ServiceData.News4.map((news4) => {
              return (
                <div className="blog_single mb_50">
                  <img
                    className="img-fluid"
                    src={require("../../img/" + news4.image)}
                    alt=""
                  />
                  <div className="blog_content">
                    <div className="post_date">
                      <h2>
                        <span>{news4.Year}</span>
                      </h2>
                    </div>
                    <h3 className="font-weight-bold t_color mb-30">
                      {news4.Title}
                    </h3>
                    <p className="ratakirkan">
                      The 2023 International Science and Invention Fair (ISIF) activity held in collaboration with the Indonesian Young Scientist Association (IYSA) and Udayana University through the Office of International Affairs (KUI), was officially closed in a ceremony at the Widya Sabha Auditorium, Bukit Jimbaran Campus, Badung on Friday (11/10/2023).
                    </p>
                    <p className="ratakirkan">
                      The international activity has lasted for four days, which is also coupled with the activities of the Invention and Innovation Fair (IIF), National Research Teacher Competition (NRTC), and International Research Teacher Competition (IRTC)Coordinator of KUI Udayana University (Unud) Putu Ayu Asty Senja Pratiwi Ph.D. in her speech said that this competition is important to grow knowledge, deepen understanding, foster learning, and also as a forum for reflection.
                    </p>

                    <p className="ratakirkan">
                      "Winning or losing is both great opportunities to teach us to take the right actions and reactions, and understand the ups and downs of life. It gives us an opportunity to spend time thinking of ways to move forward," he said, excitedly.Meanwhile, Deni Irawan as President of IYSA said, this activity aims to provide opportunities for Indonesian and foreign students to be involved in scientific exhibitions and actualize the fields of science, technology, or the combination of the two in global competitions.
                    </p>
                    <p className="ratakirkan">
                      This year, ISIF was attended by 685 teams consisting of 421 online and 264 offline teams from 28 countries. As many as 10 countries of them came directly to Bali, namely Kazakhstan, Uzbekistan, Hong Kong, Malaysia, Iran, Mexico, Romania, Singapore and Indonesia. While the rest follow online.
                    </p>
                    <p className="ratakirkan">
                      "With this event, it is hoped that it can increase the creativity of students and students in Indonesia and the world. Because learning does not only emphasize concepts, but rather actions to create a work that can be implemented in everyday life," Deni said when met by mass media crew on the sidelines of the activity.
                    </p>
                    <p className="ratakirkan"></p>
                    <p className="ratakirkan"></p>
                    <p className="ratakirkan"></p>
                    <p>
                      Source :
                      <a target="-blank" href={news4.LinkNews}>
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

export default CompNews4;
