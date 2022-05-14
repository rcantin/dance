import React from "react";
import "bootstrap";
import RoutineData from "../routines.json";

class Routines extends React.Component {
  constructor() {
    super();
    this.state = {
      routines: RoutineData,
      filterDancer: "",
    };
  }

  onChangeHandler(e) {
    this.setState({
      filterDancer: e.target.value,
    });
  }

  render() {
    return (
      <div style={this.minHeight}>
        <div className="container pb-5">
          <div className="row row-cols-1 row-cols-md-2 g-2 mb-4 justify-content-end">
            <div className="col">
              <h1>Routines</h1>
            </div>
            <div className="col">
              <input value={this.state.filterDancer} onChange={this.onChangeHandler.bind(this)} type="text" className="form-control form-control-lg" id="filterDancer" placeholder="Search for a dancer..." />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4 g-xl-5">
            {this.state.routines
              .filter((routine) => {
                return routine.dancers.find((o) => o.toLowerCase().includes(this.state.filterDancer.toLowerCase()));
              })
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((routine, i) => (
                <div className="col" key={i}>
                  <div className="card h-100 shadow">
                    <div className="card-header bg-primary text-white">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-5 fw-bold">{routine.name}</div>
                        {/* <div className="fs-5 fw-lighter text-capitalize">{routine.type}</div> */}
                      </div>
                    </div>
                    <div className="card-body">
                      {/* <div className="d-flex mb-2">
                        <div>
                          <a href="http://www.google.ca" className="fw-bold">
                            Music
                          </a>
                        </div>
                        <div className="px-2 fw-lighter">|</div>
                        <div>
                          <a href="http://www.google.ca" className="fw-bold">
                            Costume
                          </a>
                        </div>
                        <div className="px-2 fw-lighter">|</div>
                        <div>
                          <a href="http://www.google.ca" className="fw-bold">
                            Hair
                          </a>
                        </div>
                        <div className="px-2 fw-lighter">|</div>
                        <div>
                          <a href="http://www.google.ca" className="fw-bold">
                            Accessories
                          </a>
                        </div>
                      </div>
                      <hr /> */}
                      <table className="table table-borderless small">
                        <tbody>
                          <tr>
                            <td className="fw-light text-muted">Style</td>
                            <td className="text-capitalize">{routine.type}</td>
                          </tr>
                          <tr>
                            <td className="fw-light text-muted">Music</td>
                            <td className="text-capitalize">
                              <a href={routine.music[0].link} target="_blank" rel="noreferrer">
                                {routine.music[0].name}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-light text-muted">Costume</td>
                            <td>
                              {routine.costume.map((item, c) => (
                                <span key={c}>
                                  <span>{item}</span>
                                  {c < routine.costume.length ? <span>, </span> : ""}
                                </span>
                              ))}
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-light text-muted">Hair</td>
                            <td>{routine.hair}</td>
                          </tr>
                          <tr>
                            <td className="fw-light text-muted text-nowrap">Dancers ({routine.dancers.length})</td>
                            <td className="w-100">
                              {routine.dancers.map((dancer, d) => (
                                <span key={d}>
                                  <span className="text-nowrap">{dancer}</span>
                                  {d < routine.dancers.length ? <span>, </span> : ""}
                                </span>
                              ))}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Routines;
