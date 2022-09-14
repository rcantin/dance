import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  splashtext = {
    maxWidth: 600,
    fontSize: 32,
  };
  cardsection = {
    maxWidth: 800,
  };
  render() {
    return (
      <div className="">
        <div className="container-fluid px-3 py-5 px-md-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 g-lg-5 justify-content-center text-center py-5">
            <div className="col">
              <Link to="/classes" className="btn btn-primary text-white btn-block w-100 btn-lg px-5 py-4">
                Class Schedule
              </Link>
            </div>
            <div className="col">
              <Link to="/routines" className="btn btn-primary text-white btn-block w-100 btn-lg px-5 py-4">
                Routines
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
