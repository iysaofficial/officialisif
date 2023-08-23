import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import About from "../components/About/About";
import Slider from "../components/Banner/ChatBanner";
import SupportIntegration from "../components/SupportIntegration";
import Process from "../components/Process/Process";
import EventSponser from "../components/EventSponser";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";

import Video from "../components/Video";

export const Home = () => (
  <div className="body_wrapper">
    <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
    <Slider />
    <About />
    <EventSponser />
    <Video />
    <SupportIntegration />
    <Process />
    {/* <Subscribe FooterData={FooterData} /> */}
    <Footer FooterData={FooterData} />
  </div>
);
