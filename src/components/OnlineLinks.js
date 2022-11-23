import React from "react";
import "bootstrap";

class OnlineLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlineclasses: [
        { ord: 1, instructor: "Kayleigh", meetingid: "851 1656 6456", passcode: "ballet", zoomlink: "https://us02web.zoom.us/j/85116566456?pwd=QTNVL05LbWlzMEE2UytmYlFkZWptUT09" },
        { ord: 2, instructor: "Anthony", meetingid: "835 0321 5828", passcode: "499543", zoomlink: "https://us02web.zoom.us/j/83503215828?pwd=ZkdUdElTSVd2MnlML3c2S1dweDlEZz09" },
        { ord: 3, instructor: "Sarah", meetingid: "854 6627 8655", passcode: "dreamdance", zoomlink: "https://us02web.zoom.us/j/85466278655?pwd=TmJUNzl1T1VFd3ByTHZhclRrNVJIUT09" },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="container py-5">
          <h1>Zoom Links</h1>
          <div className="fw-light mb-5">
            These Zoom links are specific to each Instructor. If you need to join an online class, you can find the Instructor's link and use the provided info to join the session. If you have trouble joining a meeting when clicking on a "Join Meeting" button, you can also visit
            <a href="https://zoom.us/join" target="_blank" rel="noreferrer" className="fw-bold">
              &nbsp;https://zoom.us/join&nbsp;
            </a>
            and enter the Meeting ID provided for each instructor.
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4 g-xl-5">
            {this.state.onlineclasses
              .sort((a, b) => (a.instructor > b.instructor ? 1 : -1))
              .map((item, c) => (
                <div key={c} className="col">
                  <div className="card shadow">
                    <div className="card-body">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td colSpan={2}>
                              <div className="fs-5 fw-bold">{item.instructor}</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-light">Meeting ID</td>
                            <td>{item.meetingid}</td>
                          </tr>
                          <tr>
                            <td className="fw-light">Passcode</td>
                            <td>{item.passcode}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        <a href={item.zoomlink} target="_blank" rel="noreferrer" className="btn btn-primary text-white">
                          Join Meeting
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div className="col">
              <div className="card shadow">
                <div className="card-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <div className="fs-5 fw-bold">Miss Kayleigh</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-light">Meeting ID</td>
                        <td>851 1656 6456</td>
                      </tr>
                      <tr>
                        <td className="fw-light">Passcode</td>
                        <td>ballet</td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <a href="https://us02web.zoom.us/j/85116566456?pwd=QTNVL05LbWlzMEE2UytmYlFkZWptUT09" target="_blank" rel="noreferrer" className="btn btn-primary text-white">
                      Join Meeting
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineLinks;
