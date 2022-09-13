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
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-5 justify-content-center text-center py-5">
            <div className="col">
              <Link to="/classes" className="btn btn-outline-primary btn-lg">
                Class Schedule
              </Link>
            </div>
            {/* <div className="col">
              <Link to="/routines" className="fs-1 fw-lighter">
                Routines
              </Link>
            </div> */}
            {/* <div className="col">
              <Link to="/glossary" className="fs-1 fw-lighter">
                Glossary
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
