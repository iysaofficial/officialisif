import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";
import List2026 from "../../components/LoW/2026";

const ListOfWinner2026 = () => {
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
        Ptitle="List of Winner"
        Pdescription="Our LoW"
      />
      <List2026 />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default ListOfWinner2026;
