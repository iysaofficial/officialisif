import React from "react";

const FaqSection = () => {
  return (
    <section className="faq_area bg_color sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pr_50"></div>
          <div className="col-lg-8">
            <div className="tab-content faq_content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="purchas"
                role="tabpanel"
                aria-labelledby="purchas-tab"
              >
                <div id="accordion">
                  <div className="col-md-6 offset-md-3">
                    <div className="faq-title text-center pb-3">
                      <br />
                      <br />
                      <h2>After register</h2>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Minsa, when will we get our LoA? Where will it be
                          sent?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        After we receive your registration, we will send a
                        confirmation email within 1X24 hours, and for LoA we
                        will send it to the team leader's email address within
                        3X24 hours after registration.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Minsa, I registered one week ago, but why haven't I
                          received my LoA and Invoice yet?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Try checking the spam folder on your team leader's
                        email, maybe the email from the IYSA team went to the
                        spam folder.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Where do you upload the competition file?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        The drive link for uploading files and the link for
                        uploading proof of payment will be included in the
                        invoice. You will get an invoice like this
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfour">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapsefour"
                          aria-expanded="false"
                          aria-controls="collapsefour"
                        >
                          I want to pay the registration fee but how come I can
                          not find the invoice? and where is the payment
                          transferred?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapsefour"
                      className="collapse"
                      aria-labelledby="headingfour"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Come on, have you read LoA to the end yet? Because we
                        will send the invoice with your teams LoA, make sure you
                        have read the email from us to the end! For payment, you
                        can transfer to the account listed on the invoice. Make
                        sure you pay according to the nominal stated on the
                        invoice, okay!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfive">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapsefive"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          Minsa, I have already paid the registration fee. Where
                          can I upload the proof of payment?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapsefive"
                      className="collapse"
                      aria-labelledby="headingfive"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        If you have made a payment, you can upload the proof to
                        the link listed on the invoice, and make sure you fill
                        in and upload the proof of transfer correctly so that
                        the committee can record it correctly too
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingsix">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapsesix"
                          aria-expanded="false"
                          aria-controls="collapsesix"
                        >
                          When will the receipt be sent to us?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapsesix"
                      className="collapse"
                      aria-labelledby="headingsix"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We will send a receipt for payment in a maximum of 7
                        working days to the team leaders email, after you have
                        uploaded proof of payment!
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingseven">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseseven"
                          aria-expanded="false"
                          aria-controls="collapseseven"
                        >
                          Minsa, one more week for judging, how come I have not
                          received my teams presentation schedule yet?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseseven"
                      className="collapse"
                      aria-labelledby="headingseven"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We will send the online participant presentation
                        schedule no later than 2 days before the judging takes
                        place to the whatsapp group and also the team leaders
                        email. Make sure you diligently check the information we
                        provide on the Whatsapp group and also email!
                      </div>
                    </div>
                  </div>
                </div>

                <div id="accordion3">
                  <div className="col-md-6 offset-md-3">
                    <div className="faq-title text-center pb-3">
                      <br />
                      <br />
                      <h2>During the Event</h2>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="heading-During-One">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapse-During-One"
                          aria-expanded="true"
                          aria-controls="collapse-During-One"
                        >
                          When will the presentation schedule be given by the
                          committee?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse-During-One"
                      className="collapse show"
                      aria-labelledby="heading-During-One"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        We will provide a presentation schedule no later than 2
                        days before the judging takes place or it could be
                        earlier, and we will send it via the WA group and also
                        the team leaders e-mail.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-During-Two">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-During-Two"
                          aria-expanded="false"
                          aria-controls="collapse-During-Two"
                        >
                          What application used for online presentation? Zoom,
                          Google Meet or something else?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-During-Two"
                      className="collapse"
                      aria-labelledby="heading-During-Two"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        For online judging, we always use the Zoom application
                        and make sure your Zoom application is up to date.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-During-Three">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-During-Three"
                          aria-expanded="false"
                          aria-controls="collapse-During-Three"
                        >
                          When will the zoom link be given by the committee?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-During-Three"
                      className="collapse"
                      aria-labelledby="heading-During-Three"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        We will provide a Zoom link on the judging day, and we
                        will send it periodically to the group according to your
                        teams presentation time
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-During-four">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-During-four"
                          aria-expanded="false"
                          aria-controls="collapse-During-four"
                        >
                          how many zoom accounts can join and what should i set
                          my name<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-During-four"
                      className="collapse"
                      aria-labelledby="heading-During-four"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        You can enter Zoom with a maximum of 5 accounts for
                        participants, and all Zoom accounts must follow the name
                        format that we have provided, namely "Room Number_Team
                        Leader Name_Institution Name".
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-During-five">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-During-five"
                          aria-expanded="false"
                          aria-controls="collapse-During-five"
                        >
                          how long will the participants make the presentation?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-During-five"
                      className="collapse"
                      aria-labelledby="heading-During-five"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        You will be given 15 minutes for 1 presentation session
                        which will be divided into 2, namely the initial 7
                        minutes for the presentation and the final 8 minutes for
                        the question and answer session with the jury
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-During-six">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-During-six"
                          aria-expanded="false"
                          aria-controls="collapse-During-six"
                        >
                          How many judges will come to the offline participants
                          booth?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-During-six"
                      className="collapse"
                      aria-labelledby="heading-During-six"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        Just like online judging, there will be 2 judges judging
                        each team. And after being judged you will be given a
                        sticker as a sign that your booth has been judged, make
                        sure you get 2 stickers
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-During-seven">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-During-seven"
                          aria-expanded="false"
                          aria-controls="collapse-During-seven"
                        >
                          Can we tidy up our booth after being judged?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-During-seven"
                      className="collapse"
                      aria-labelledby="heading-During-seven"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        You can start tidying up the booth when all the teams
                        have finished being judged, so if you have finished
                        judging you can visit the booths of other participants
                        first
                      </div>
                    </div>
                  </div>
                </div>

                <div id="accordion3">
                  <div className="col-md-6 offset-md-3">
                    <div className="faq-title text-center pb-3">
                      <br />
                      <br />
                      <h2>After the Event</h2>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="heading-After-One">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapse-After-One"
                          aria-expanded="true"
                          aria-controls="collapse-After-One"
                        >
                          When will the winners be announced?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse-After-One"
                      className="collapse show"
                      aria-labelledby="heading-After-One"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        Announcement of winners is held on the last day of each
                        event, you can check the date on the schedule listed in
                        the Guide Book.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-After-Two">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-After-Two"
                          aria-expanded="false"
                          aria-controls="collapse-After-Two"
                        >
                          Where can we see the winning results?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-After-Two"
                      className="collapse"
                      aria-labelledby="heading-After-Two"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        You can check the final results on the official website
                        of the event you are participating in.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-After-Three">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-After-Three"
                          aria-expanded="false"
                          aria-controls="collapse-After-Three"
                        >
                          When will the E-certificate be sent?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-After-Three"
                      className="collapse"
                      aria-labelledby="heading-After-Three"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        IYSA DOES NOT send E-Certificates to National
                        participants or Indonesian Participants who take part in
                        online events. Online National Participants will only
                        receive a certificate in printed/hard form which will
                        later be sent along with the medals via the JNE
                        expedition.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-After-four">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-After-four"
                          aria-expanded="false"
                          aria-controls="collapse-After-four"
                        >
                          When is the online delivery of participant
                          certificates?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-After-four"
                      className="collapse"
                      aria-labelledby="heading-After-four"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        The certificate will be sent no later than one month
                        after the announcement of the winner. You can
                        periodically check the delivery receipt that we sent on
                        the Whatsapp group whether your certificate has been
                        sent or not.".
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-After-five">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-After-five"
                          aria-expanded="false"
                          aria-controls="collapse-After-five"
                        >
                          Where can we get a supervisor certificate?
                          <i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-After-five"
                      className="collapse"
                      aria-labelledby="heading-After-five"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        You can see and download the supervisor certificate on
                        the official website of the event you are participating
                        in.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading-After-six">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse-After-six"
                          aria-expanded="false"
                          aria-controls="collapse-After-six"
                        >
                          How to do medal doubling?<i className="ti-plus"></i>
                          <i className="ti-minus"></i>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse-After-six"
                      className="collapse"
                      aria-labelledby="heading-After-six"
                      data-parent="#accordion3"
                    >
                      <div className="card-body">
                        For offline participants, you can immediately duplicate
                        the medals on the spot after the announcement of the
                        winners takes place. And for online participants, you
                        can duplicate the medals via the link we sent on the
                        Whatsapp group, we will send duplicate information on
                        the Whatsapp group no later than 2 days after the
                        announcement of the winner.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="tab-pane fade" id="care" role="tabpanel" aria-labelledby="care-tab">
                                <h3 className="f_p f_size_22 f_500 t_color3 mb_20">How to purchase</h3>
                                <div id="accordion6">
                                    <div className="card">
                                        <div className="card-header" id="heading24">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse24" aria-expanded="true" aria-controls="collapse24">
                                                    How do I repair an item?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapse24" className="collapse show" aria-labelledby="heading24" data-parent="#accordion6">
                                            <div className="card-body">
                                                Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky panky a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon you bloke the BBC. Tickety-boo Elizabeth plastered matie.!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading25">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                                    Where can I find instructions on how to use my watch?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse25" className="collapse" aria-labelledby="heading25" data-parent="#accordion6">
                                            <div className="card-body">
                                                Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky panky a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon you bloke the BBC. Tickety-boo Elizabeth plastered matie.!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading26">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
                                                    Is there a warranty on my item?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse26" className="collapse" aria-labelledby="heading26" data-parent="#accordion6">
                                            <div className="card-body">
                                                Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky panky a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon you bloke the BBC. Tickety-boo Elizabeth plastered matie.!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading27">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse27" aria-expanded="false" aria-controls="collapse27">
                                                    Is there a warranty on my item?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse27" className="collapse" aria-labelledby="heading27" data-parent="#accordion6">
                                            <div className="card-body">
                                                Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky panky a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon you bloke the BBC. Tickety-boo Elizabeth plastered matie.!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading28">
                                            <h5 className="mb-0">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse28" aria-expanded="false" aria-controls="collapse28">
                                                    Is there a warranty on my item?<i className="ti-plus"></i><i className="ti-minus"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapse28" className="collapse" aria-labelledby="heading28" data-parent="#accordion6">
                                            <div className="card-body">
                                                Why I say old chap that is spiffing pukka, bamboozled wind up bugger buggered zonked hanky panky a blinding shot the little rotter, bubble and squeak vagabond cheeky bugger at public school pardon you bloke the BBC. Tickety-boo Elizabeth plastered matie.!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
