import React from "react";
// import { Link } from "react-router-dom";

class Home extends React.Component {
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
          <div>Test text...</div>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-5 justify-content-center text-center py-5">
            <div className="col">
              Test
            </div>
            <div className="col">
              Test
            </div>
            <div className="col">
              Test
            </div>
            <div className="col">
              Test
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
