import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import { Home } from "./Pages/Home";
// import DigitalMarketing from './Pages/Digital-marketing';
// import PaymentProcessing from './Pages/Payment-processing';
// import HRManagement from './Pages/HR-Management';
// import Startup from './Pages/Startup';
// import HomeCRM from './Pages/Home-CRM';
import About from "./Pages/About";
// import Service from './Pages/Service';
import Process from "./Pages/Process";
// import Team from './Pages/Team';
import Portfolio2col from "./Pages/Portfolio-2col";
import GalleryF from "./Pages/GalleryF";
import Photo from "./Pages/Photo";
import PortfolioSingle from "./Pages/PortfolioSingle";
import Bloglist from "./Pages/Bloglist";
import BlogSingle from "./Pages/BlogSingle";
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";

// Import NEWS
import PageNewsList from "./Pages/News/PageNewsList";
import PageNews1 from "./Pages/News/PageNews1";
import PageNews2 from "./Pages/News/PageNews2";
import PageNews3 from "./Pages/News/PageNews3";

// Import FAQ
import Faq from "./Pages/Faq";

// import ServiceDetails from './Pages/ServiceDetails';
// import SignIn from './Pages/SignIn';
// import SignUp from './Pages/SignUp';
// import BlogGridPage from './Pages/BlogGridPage';
import NotFound from "./Pages/404";
import Iysacollab from "./Pages/Iysa-collaboration";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />

          <ScrollToTopRoute path="/About" component={About} />
          {/* <ScrollToTopRoute path="/Service" component={Service} /> */}
          <ScrollToTopRoute path="/Process" component={Process} />
          {/* <ScrollToTopRoute path="/Team" component={Team} /> */}
          <ScrollToTopRoute path="/gallery-video" component={Portfolio2col} />
          <ScrollToTopRoute path="/GalleryF" component={GalleryF} />
          <ScrollToTopRoute path="/Photo" component={Photo} />
          <ScrollToTopRoute
            path="/PortfolioSingle"
            component={PortfolioSingle}
          />
          <ScrollToTopRoute path="/Bloglist" component={Bloglist} />
          <ScrollToTopRoute path="/Iysacollaboration" component={Iysacollab} />
          <ScrollToTopRoute path="/BlogSingle" component={BlogSingle} />
          {/* <ScrollToTopRoute path="/BlogGridPage" component={BlogGridPage} /> */}
          <ScrollToTopRoute path="/Contact" component={Contact} />

          {/* Variabel News */}
          <ScrollToTopRoute path="/PageNewsList" component={PageNewsList} />
          <ScrollToTopRoute path="/PageNews1" component={PageNews1} />
          <ScrollToTopRoute path="/PageNews2" component={PageNews2} />
          <ScrollToTopRoute path="/PageNews3" component={PageNews3} />

          <ScrollToTopRoute path="/Faq" component={Faq} />
          {/* <ScrollToTopRoute path="/Landing" component={Landing} /> */}
          {/* <ScrollToTopRoute path="/home-support" component={homesupport} /> */}
          {/* <ScrollToTopRoute path="/HomeHosting" component={homeHosting} /> */}
          {/* <ScrollToTopRoute path="/Home-ERP" component={homeERP} /> */}
          {/* <ScrollToTopRoute path="/HomeSecurity" component={homeSecurity} /> */}
          {/* <ScrollToTopRoute
            path="/HomeAppShowcase"
            component={HomeAppShowcase}
          />
          <ScrollToTopRoute
            path="/Home-software-dark"
            component={homeSoftwareDark}
          />
          <ScrollToTopRoute path="/Home-cloud" component={HomeCloud} />
          <ScrollToTopRoute path="/Home-Tracking" component={HomeTracking} />
          <ScrollToTopRoute path="/Events" component={Events} />
          <ScrollToTopRoute path="/Home-chat" component={HomeChat} />
          <ScrollToTopRoute path="/Price" component={Price} />
          
          <ScrollToTopRoute path="/ServiceDetails" component={ServiceDetails} />
          <ScrollToTopRoute path="/SignIn" component={SignIn} />
          <ScrollToTopRoute path="/SignUp" component={SignUp} /> */}
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
