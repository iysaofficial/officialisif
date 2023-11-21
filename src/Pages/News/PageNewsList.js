import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Breadcrumb from "../../components/Breadcrumb";
import NewsList from "../../components/News/NewsList";
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";

const PageNewsList = () => {
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
        Ptitle="MEDIA COVERAGE"
        Pdescription="Our News"
      />
      <NewsList />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default PageNewsList;
