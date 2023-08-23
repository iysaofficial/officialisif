import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
class Sectitle extends Component {
  render() {
    var {
      Title,
      Title1,
      Title2,
      Title3,
      Title4,
      Title5,
      Title6,
      Title7,
      Title8,
      tClass,
      sClass,
    } = this.props;
    return (
      <div className={`${sClass}`}>
        <Reveal effect="fadeInUp" duration={1300}>
          <h2 className={`f_p f_size_30 l_height50 f_600 ${tClass}`}>
            {Title}
          </h2>
        </Reveal>
        <Reveal effect="fadeInUp" duration={1600}>
          <p className="f_400 f_size_16 mb-0 ">{Title1}</p>
          <p className="f_400 f_size_16 mb-0 ratakirkan">{Title2}</p>
          <p className="f_400 f_size_16 mb-0 ratakirkan">{Title3}</p>
          <p className="f_400 f_size_16 mb-0 ratakirkan">{Title4}</p>
          <p className="f_400 f_size_16 mb-0 ratakirkan">{Title5}</p>
          <p className="f_400 f_size_16 mb-0 ratakirkan">{Title6}</p>
          <p className="f_400 f_size_16 mb-0 ratakirkan">{Title7}</p>
          <p className="f_400 f_size_16 mb-0 ratakirkan">{Title8}</p>
        </Reveal>
      </div>
    );
  }
}
export default Sectitle;
