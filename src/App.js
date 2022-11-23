import React from "react";
import "./scss/theme.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Routines from "./components/Routines";
import Classes from "./components/Classes";
import Schedule from "./components/Schedule";
import OnlineLinks from "./components/OnlineLinks";

class App extends React.Component {
  topspacing = {
    marginTop: 50,
  };

  render() {
    return (
      <React.Fragment>
        <Router basename="/">
          <Nav />
          <div className="d-flex flex-column justify-content-stretch align-items-stretch h-100">
            <div className="d-print-none" style={this.topspacing}></div>
            <div className="flex-fill p-3">
              <ScrollToTop />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/routines" component={Routines} />
                <Route path="/classes" component={Classes} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/onlinelinks" component={OnlineLinks} />
              </Switch>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
