import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";
import List2025 from "../../components/LoW/2025";

const ListOfWinner2025 = () => {
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
      <List2025 />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default ListOfWinner2025;