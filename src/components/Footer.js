import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="p-5 bg-dark text-white">
          <div className="d-md-flex justify-content-center align-items-center pt-4 text-center">
            <div className="p-1">
              <Link to="/">Home</Link>
            </div>
            <div className="px-2 text-muted d-none d-md-block">|</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
