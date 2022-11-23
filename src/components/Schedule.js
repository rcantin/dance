import React from "react";
import "bootstrap";

class Schedule extends React.Component {
  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="row g-4 g-xl-5 mb-5 justify-content-between align-items-end">
            <div className="col">
              <h1 className="mb-0">Schedule</h1>
              <div className="fw-light">If you notice an issue or error on this page, please let Ryan know so it can be corrected.</div>
              <div className="py-4">
                <div id="carouselExampleControls" className="carousel carousel-dark slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">First</th>
                            <th scope="col" className="w-100">
                              Second
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Thing</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Something</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Another Thing</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>More Stuff</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Something Else</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* <img src="https://picsum.photos/400/400?random=1" className="d-block w-100" alt="carousel image" /> */}
                    </div>
                    <div className="carousel-item">
                      <img src="https://picsum.photos/400/400?random=2" className="d-block w-100" alt="carousel" />
                    </div>
                    <div className="carousel-item">
                      <img src="https://picsum.photos/400/400?random=3" className="d-block w-100" alt="carousel" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
