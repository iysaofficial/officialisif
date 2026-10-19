import React from "react";
import "./../../assets/registration.css";
import CustomNavbar from "../../components/CustomNavbar";
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";

const CertSupervisor2026 = () => {
  return (
    <>
      <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                CERTIFICATE SUPERVISOR 2026
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Certificate Supervisor Category
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <button
              type="button"
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() => window.open("https://drive.google.com/drive/folders/1rZRI_fdI-wwt31PiqkcQ03Z22dZbImqd?usp=sharing")}
            >
              Online Competition{" "}
              <i className="fa-solid fa-globe"></i>
            </button>
            <button
              type="button"
              className="btn-regist btn-action text-center me-lg-5 m-2"
              onClick={() => window.open("https://drive.google.com/drive/folders/1zUDQCZMDIsxBMzz-7P3ngNmEFFpHWh9s?usp=sharing")}
            >
              Offline Competition{" "}
              <i className="fa-solid fa-building"></i>
            </button>
          </div>
        </div>
      </section>
      <Footer FooterData={FooterData} />
    </>
  );
};

export default CertSupervisor2026;
