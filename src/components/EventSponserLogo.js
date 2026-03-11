import React, { Component } from "react";

class EventSponserLogo extends Component {
  render() {
    let { image } = this.props;
    return (
      <div className="col-lg-3 col-sm-4 col-6">
        <div className="analytices_logo wow fadeInUp">
          <img src={require("../img/home-software/" + image)} alt="" />
        </div>
      </div>
    );
  }
}
export default EventSponserLogo;
