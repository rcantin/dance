import React from "react";
import "./scss/theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Routines from "./components/Routines";

class App extends React.Component {
  topspacing = {
    marginTop: 72,
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Nav />
          <div className="d-flex flex-column justify-content-stretch align-items-stretch h-100">
            <div className="d-print-none" style={this.topspacing}></div>
            <div className="flex-fill p-3">
              <ScrollToTop />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/routines" component={Routines} />
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
