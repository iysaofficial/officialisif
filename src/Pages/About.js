import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";
import ChatClients from "../components/chatClients";

const About = () => {
  return (
    <>
      <div className="body_wrapper">
        <CustomNavbar
          slogo="sticky_logo"
          mClass="menu_four"
          nClass="w_menu ml-auto mr-auto"
        />
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName="breadcrumb/isif.jpg"
          Ptitle="About Us"
          Pdescription="Read Our Documents"
        />
        <ChatClients />
        {/* <GuideBook /> */}
        {/* <AgencyAbout ServiceData={ServiceData} />
      <Partner pClass="partner_logo_area_five bg_color" /> */}
      </div>
      <div>
        <Footer FooterData={FooterData} />
      </div>
    </>
  );
};
export default About;
