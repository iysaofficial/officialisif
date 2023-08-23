import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";
import CompNews3 from "../../components/News/CompNews3";

const PageNews3 = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/bg.jpg"
        Ptitle="IYSA NEWS "
        Pdescription="Home - News"
      />
      {/* <IysaCollab /> */}
      <CompNews3 />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default PageNews3;
