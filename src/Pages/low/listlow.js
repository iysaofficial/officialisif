import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";
import ListLow from "../../components/LoW/listlowcomponent";

const ListOfWinner = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="background/ISIF 2025-22.jpg"
        Ptitle="List of Winner"
        Pdescription="Our LoW"
      />
      <ListLow />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default ListOfWinner;
