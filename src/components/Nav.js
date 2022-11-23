import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/dance-logo.svg";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class TopNav extends React.Component {
  bannerlogostyle = {
    height: 35,
    // padding: 6,
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top d-print-none py-3 px-1">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand p-1">
              <div className="d-flex justify-content-start align-items-center">
                <div>
                  <img src={Logo} alt="Logo" style={this.bannerlogostyle} />
                </div>
                <div className="fw-light fs-3 ps-2">Dance Stuff</div>
              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header justify-content-end">
                <button type="button" className="btn btn-link btn-lg" data-bs-dismiss="offcanvas" aria-label="Close">
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>
              <div className="offcanvas-body" data-bs-dismiss="offcanvas">
                <ul className="navbar-nav justify-content-center align-items-center text-center ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-primary fw-normal">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/classes" className="nav-link text-primary fw-normal">
                      Class Schedule
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/onlinelinks" className="nav-link text-primary fw-normal">
                      Online Class Links
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="/routines" className="nav-link text-primary fw-normal">
                      Routines
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopNav;
