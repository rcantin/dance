import React from "react";
// import { Link } from "react-router-dom";

class Routines extends React.Component {
  splashtext = {
    maxWidth: 600,
    fontSize: 32,
  };
  cardsection = {
    maxWidth: 800,
  };
  minHeight = {
    minHeight: '100%',
  };
  render() {
    return (
      <div style={this.minHeight}>
        <div className="container pt-4">
        </div>
        <div className="container-fluid px-3 py-5 px-md-5">
          <h1>Routines</h1>
        </div>
      </div>
    );
  }
}

export default Routines;
