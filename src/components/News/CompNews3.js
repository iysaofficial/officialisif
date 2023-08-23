import React from "react";
import ServiceData from "../Service/ServiceData";

const CompNews3 = () => {
  return (
    <section className="blog_area sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 blog_sidebar_left">
            {ServiceData.News3.map((news3) => {
              return (
                <div className="blog_single mb_50">
                  <img
                    className="img-fluid"
                    src={require("../../img/" + news3.image)}
                    alt=""
                  />
                  <div className="blog_content">
                    <div className="post_date">
                      <h2>
                        <span>{news3.Year}</span>
                      </h2>
                    </div>
                    <h3 className="font-weight-bold t_color mb-30">
                      {news3.Title}
                    </h3>
                    <p className="ratakirkan">
                      The Student Team of the Faculty of Social and Political
                      Sciences (FISIP) Universitas Jenderal Soedirman (Unsoed)
                      Purwokerto, Banyumas Regency, Central Java, won a gold
                      medal at the 2022 International Science and Invention Fair
                      (ISIF). The team chaired by I Putu Arya Aditia Utama from
                      the 2020 International Relations Department consisted of
                      Atalia Eureka Putri Taju from the 2019 International
                      Relations Department, Windy Chairunissa from the 2020
                      Public Administration Department, and Fauzian Kadafi
                      Arifiatmoko from the 2019 Public Administration
                      Department.
                    </p>
                    <p className="ratakirkan">
                      The ISIF 2022 event organized by the Indonesian Young
                      Scientist Association (IYSA) took place at Universitas
                      Pendidikan Ganesha Bali on November 1-4, 2022 and was
                      attended by 614 teams from 32 countries. The international
                      event competed in 7 categories, namely Matematics;
                      Physics, Energy, and Engineering; Life Science;
                      Technology; Environment; Social Science; and Education.
                      All participants are required to make presentations in
                      full English. The Unsoed delegation at the event delivered
                      a presentation entitled "SERENA (Social Economic
                      Remittance Application): Social and Economic Remittance
                      Development Centre of Migrant Workers based on Mobile
                      Application".
                    </p>

                    <p className="ratakirkan">
                      The Head of the FISIP Unsoed I Student Team, Putu Arya
                      Aditia Utama, said that the presentation delivered was
                      about innovation in the development of social and economic
                      remittance for migrant workers. The reason is, he said,
                      Indonesian migrant workers get a lot of problems because
                      of the lack of capacity to understand the social and
                      economic remittances they should get. "With SERENA's
                      innovation, it is hoped that migrant workers' problems
                      regarding remittances can be resolved and be able to help
                      migrant workers to live more prosperously," he explained.
                      Furthermore, he said the competition process was very
                      extraordinary because the FISIP Unsoed Student Team
                      competed with 614 teams from 32 countries.
                    </p>
                    <p className="ratakirkan">
                      According to him, the competition gave an unforgettable
                      impression to all team members because they did not
                      imagine they could win a gold medal in a prestigious
                      international event. "We would like to thank our
                      supervision, namely Dr. Tyas Retno Wulan who has provided
                      a lot of guidance until this innovation was successfully
                      created. Hopefully with this achievement, Unsoed students
                      will be more motivated to boast their beloved alma mater
                      in the national, even international arena," said Aditia.
                    </p>
                    <p className="ratakirkan"></p>
                    <p className="ratakirkan"></p>
                    <p className="ratakirkan"></p>
                    <p className="ratakirkan"></p>
                    <p>
                      Source :
                      <a target="-blank" href={news3.LinkNews}>
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

export default CompNews3;
