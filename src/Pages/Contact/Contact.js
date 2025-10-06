import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Breadcrumb from "../../components/Breadcrumb";
// import Contacts from '../components/Contacts';
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";
// import CoreFeatures from '../components/Features/CoreFeatures';
import MarketingGetstarted from "../../components/MarketingGetstarted";
import EventLocation from "../../components/EventLocation";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
      const scriptURL =
      "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

      const form = document.forms.namedItem("contact");

      if (form) {
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
          await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
          });
          alert("Message sent successfully!");
          form.reset();
          } catch (error) {
          console.error("Error:", error);
          alert("Failed to send Message.");
          }
      };

      form.addEventListener("submit", handleSubmit);

      // cleanup listener
      return () => {
          form.removeEventListener("submit", handleSubmit);
      };
      }
  }, []);

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
                      action=""
                      method="POST"
                      name="contact"
                    >
                      <table>
                         <input type="hidden" name="Event" value="ISIF" readOnly />
                        <tr>
                          <td>
                            <input
                              type="text"
                              name="Name"
                              placeholder="Your Name"
                              required
                              autocomplete="off"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <input
                              type="email"
                              name="Email"
                              placeholder=" Your Email"
                              required
                              autocomplete="off"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <textarea
                              name="Message"
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
