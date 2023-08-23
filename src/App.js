import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
import { Home } from "./Pages/Home";
import Contact from "./Pages/Contact/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";

// Import NEWS
import PageNewsList from "./Pages/News/PageNewsList";
import PageNews1 from "./Pages/News/PageNews1";
import PageNews2 from "./Pages/News/PageNews2";
import PageNews3 from "./Pages/News/PageNews3";

// Import FAQ
import Faq from "./Pages/FAQ/Faq";

import NotFound from "./Pages/404";

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

          {/* Variabel News */}
          <ScrollToTopRoute path="/PageNewsList" component={PageNewsList} />
          <ScrollToTopRoute path="/PageNews1" component={PageNews1} />
          <ScrollToTopRoute path="/PageNews2" component={PageNews2} />
          <ScrollToTopRoute path="/PageNews3" component={PageNews3} />

          <ScrollToTopRoute path="/Faq" component={Faq} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
