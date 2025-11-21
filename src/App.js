import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import { Home } from "./Pages/Home";
import Contact from "./Pages/Contact/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import ListOfWinner from "./Pages/low/listlow";
import ListOfWinner2025 from "./Pages/low/low2025";

// Import NEWS
import PageNewsList from "./Pages/News/PageNewsList";
import PageNews1 from "./Pages/News/PageNews1";
import PageNews2 from "./Pages/News/PageNews2";
import PageNews3 from "./Pages/News/PageNews3";
import PageNews4 from "./Pages/News/PageNews4";
import PageNews5 from "./Pages/News/PageNews5";
import PageNews6 from "./Pages/News/PageNews6";

// Import FAQ
import Faq from "./Pages/FAQ/Faq";

import NotFound from "./Pages/404";
import RegistHome from "./Pages/registration/homeregist";
import HomeIndo from "./Pages/registration/homeindo";
import HomeInter from "./Pages/registration/homeinter";
import IndonesiaOffline from "./Pages/registration/indo-offline";
import IndonesiaOnline from "./Pages/registration/indo-online";
import Thankyouinter from "./Pages/registration/thankyouinter";
import InternationalOnline from "./Pages/registration/inter-online";
import InternationalOffline from "./Pages/registration/inter-offline";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute path="/Contact" component={Contact} />
          <ScrollToTopRoute path="/ListOfWinner" component={ListOfWinner} />
          <ScrollToTopRoute path="/list2025" component={ListOfWinner2025} />

          {/* Variabel News */}
          <ScrollToTopRoute path="/PageNewsList" component={PageNewsList} />
          <ScrollToTopRoute path="/PageNews1" component={PageNews1} />
          <ScrollToTopRoute path="/PageNews2" component={PageNews2} />
          <ScrollToTopRoute path="/PageNews3" component={PageNews3} />
          <ScrollToTopRoute path="/PageNews4" component={PageNews4} />
          <ScrollToTopRoute path="/PageNews5" component={PageNews5} />
          <ScrollToTopRoute path="/PageNews6" component={PageNews6} />

          <ScrollToTopRoute path="/Faq" component={Faq} />
          
          {/* REGIST */}
          <ScrollToTopRoute path="/Homeregist" component={RegistHome} />
          <ScrollToTopRoute path="/Homeindo" component={HomeIndo} />
          <ScrollToTopRoute path="/Homeinter" component={HomeInter} />
          <ScrollToTopRoute path="/indo-offline" component={IndonesiaOffline} />
          <ScrollToTopRoute path="/indo-online" component={IndonesiaOnline} />
          <ScrollToTopRoute path="/inter-online" component={InternationalOnline} />
          <ScrollToTopRoute path="/inter-offline" component={InternationalOffline} />
          <ScrollToTopRoute path="/thankyouinter" component={Thankyouinter} />

          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
