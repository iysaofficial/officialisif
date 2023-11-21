import React from "react";
import ServiceData from "../Service/ServiceData";

const CompNews6 = () => {
  return (
    <section className="blog_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 blog_sidebar_left">
            {ServiceData.News6.map((news6) => {
              return (
                <div className="blog_single mb_50">
                  <img
                    className="img-fluid"
                    src={require("../../img/" + news6.image)}
                    alt=""
                  />
                  <div className="blog_content">
                    <div className="post_date">
                      <h2>
                        <span>{news6.Year}</span>
                      </h2>
                    </div>
                    <h3 className="font-weight-bold t_color mb-30">
                      {news6.Title}
                    </h3>
                    <p className="ratakirkan">
                        The competition was held in Bali, Indonesia, from November 7 to 11. Udayana University (Unud) collaborated with the Indonesian Young Scientist Association (IYSA) to hold the 2023 ISIF at the Widyasabha Auditorium, Unud Jimbaran Campus.The students grabbed one gold medal, 3 silver medals, and 10 bronze medals in the ISIF2023 Indonesia, IRIB reported.ISIF is an international competition organized by IYSA. The 2023 competition involved the participation of 860 teams from 21 countries.
                    </p>
                    <p className="ratakirkan">
                        The competition was attended both online and in-person by students from various countries who showed their work or research in front of judges and other visitors.Ilya Rezazadeh and Padra Qazvinian in the Technical-engineering field won the gold medal.Amir Hossein Manafi in the Nano-chemistry field won the silver medal.In the online section, the Iranian team was represented by Arshia Jannat Makan and Siavash Beheshti, who grabbed 2 silver medals.
                    </p>

                    <p className="ratakirkan">
                        Mohammad-Emad Moradi, Arsas Afshar, Vendad Razmi, Kian Karbaschi, Amir-Ali Mazrouei Sabdani, Mahsa Zolqadri, Barbod Rendeh zadeh, Mohammad-Behrad Qasemi, Nafas Esmaeilzadeh Afshar, and Seyed Mohammad-Samyar Sari Won Bronze medals in the fields of Technical-engineering, Nano-chemistry, Physics, Biotechnology, and Social Sciences.On the sidelines of the ISIF2023 Indonesia International Science and Invention Competition, Ibn Sina International Festival awarded special prizes to the top five teams from Malaysia, Indonesia, Romania, and Kazakhstan.
                    </p>
                    <p className="ratakirkan font-weight-bold">
                        Previous achievements
                    </p>
                    <p className="ratakirkan">
                        On October 11, Iranian students won eight medals in the Fifth International Invention and Trade Expo (ITE 2023) which was held in London.
                    </p>
                    <p className="ratakirkan">Kingston University hosted the event from October 5 to 6.</p>
                    <p className="ratakirkan">ITE 2023 provides a business platform for inventors, manufacturers, and dealers to present their latest products and innovations and exchange information.</p>
                    <p className="ratakirkan">At ITE, excellence in innovation is highlighted through the Invention & Innovation Award, it brings recognition to the best inventions, innovations, and trade, adding to its merit is supported by many international delegates.</p>
                    <p className="ratakirkan">Delegations from 34 countries participated in the competition and Iranian students succeeded in winning eight medals, IRNA reported</p>
                    <p className="ratakirkan">The students attended the competition virtually and won three gold medals, four silver medals, and a bronze medal. Amir-Hossein Manafi was granted a specific award.</p>
                    <p className="ratakirkan">In the ISIF 2022 tournament, which was attended by 570 teams from 32 countries, the Iranian team won a total of 13 colorful medals and a special award. The students won 4 gold, 7 silver, and 2 bronze medals.</p>
                    <p className="ratakirkan">The ISIF gold-medal-winning team consisted of Mehrbod Bani Amerian and Arvin Yaghoubi in the field of technical engineering and electronics, in addition to Pariya Kadkhodaei who grabbed a gold medal in the field of chemistry-nano.</p>
                    <p className="ratakirkan">Hasan Kakanejadi and Kousha Rostami won the silver medal in the field of computer science.</p>
                    <p className="ratakirkan">Annually organized by the Indonesian Young Scientist Association, the competition was held in Bali, Indonesia, from November 1 to 5.</p>
                    <p className="ratakirkan"></p>
                    <p>
                      Source :  
                      <a target="-blank" href={news6.LinkNews}> Click Here
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

export default CompNews6;
