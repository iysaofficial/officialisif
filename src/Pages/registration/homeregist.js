import React from "react";
import "./../../assets/registration.css";
import CustomNavbar from "../../components/CustomNavbar";
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";

const RegistHome = () => {
  return (
    <>
      <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Categories Participant for Registration ISIF 2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              href="/Homeindo"
              className="btn-regist btn-action text-center me-lg-5 m-2"
            >
              Indonesia Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
            <a
              href="/Homeinter"
              className="btn-regist btn-action text-center me-lg-5 m-2"
            >
              International Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>
      <Footer FooterData={FooterData} />
    </>
  );
};

export default RegistHome;
