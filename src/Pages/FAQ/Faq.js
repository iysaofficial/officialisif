import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Breadcrumb from "../../components/Breadcrumb";
import FaqSection from "../../components/FAQ/FaqSection";
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";

const Faq = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="background/img2.WebP"
        Ptitle="FAQ"
      />
      <FaqSection />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default Faq;
