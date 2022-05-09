import React from "react";
import "bootstrap";

class Routines extends React.Component {
  splashtext = {
    maxWidth: 600,
    fontSize: 32,
  };
  cardsection = {
    maxWidth: 800,
  };
  minHeight = {
    minHeight: "100%",
  };
  render() {
    return (
      <div style={this.minHeight}>
        <div className="container pt-4"></div>
        <div className="container-fluid px-3 py-5 px-md-5">
          <h1>Routines</h1>
          <hr />
          <h4>Push It</h4>
          <div>Stuff goes here...</div>
          <hr />
          <h4>My Message To You</h4>
          <div>Stuff goes here...</div>
          <hr />
          <h4>Boogie On</h4>
          <div>Stuff goes here...</div>
          <hr />
          <h4>Peanut Butter Jelly</h4>
          <div>Stuff goes here...</div>
          <hr />
          <h4>Lose Control</h4>
          <div>Stuff goes here...</div>
        </div>
      </div>
    );
  }
}

export default Routines;
