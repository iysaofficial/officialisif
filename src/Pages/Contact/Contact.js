import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Breadcrumb from "../../components/Breadcrumb";
// import Contacts from '../components/Contacts';
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";
// import CoreFeatures from '../components/Features/CoreFeatures';
import MarketingGetstarted from "../../components/MarketingGetstarted";
import EventLocation from "../../components/EventLocation";

const Contact = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />

      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/call_me.jpg"
        Ptitle="Contact Us"
        Pdescription="Please feel free to contact us if you need other assistance"
      />
      <section className="her mt-5">
        <div className="container">
          <div id="kontak" class="contact">
            <div class="container">
              <div class="contact-box">
                <div class="box">
                  <h1>Contact Us</h1>
                  <div class="form-contact">
                    <form
                      action="https://formspree.io/f/mqkrryeb"
                      method="POST"
                    >
                      <table>
                        <tr>
                          <td>
                            <input
                              type="text"
                              name="First Name"
                              placeholder="First Name"
                              required
                              autocomplete="off"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="Lash Name"
                              placeholder="Last Name"
                              autocomplete="off"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <input
                              type="email"
                              name="email"
                              placeholder=" Your Email"
                              required
                              autocomplete="off"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <textarea
                              name="text"
                              cols="30"
                              rows="10"
                              placeholder="Message"
                              required
                            ></textarea>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <button
                              type="submit"
                              value="send"
                              onclick="return confirm"
                              className="btn-contact btn btn-primary"
                            >
                              Send
                            </button>
                          </td>
                        </tr>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Contacts /> */}
      {/* <CoreFeatures /> */}
      <MarketingGetstarted />
      <EventLocation />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default Contact;
