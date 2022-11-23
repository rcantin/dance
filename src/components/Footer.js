import React from "react";
// import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="p-4 bg-dark text-white">
          <div className="d-md-flex justify-content-center align-items-center flex-column py-3 text-center font-script h1 mb-0 fw-light">
            <div>
              Don't wait for the storm to pass. Learn to <span className="text-nowrap">dance in the rain.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
