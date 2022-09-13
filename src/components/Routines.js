import React from "react";
import "bootstrap";
import RoutineData from "../routines.json";

class Routines extends React.Component {
  constructor() {
    super();
    this.state = {
      routines: RoutineData,
      filterSearch: "",
    };
  }

  changeSearch(e) {
    this.setState({
      filterSearch: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-2 g-2 mb-5 justify-content-between align-items-center">
            <div className="col">
              <h1 className="mb-0">Routines</h1>
            </div>
            <div className="col">
              <input value={this.state.filterSearch} onChange={this.changeSearch.bind(this)} type="search" className="form-control form-control-lg" id="search" placeholder="Search (routine, dancer, style)..." autoComplete="off" />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4 g-xl-5">
            {this.state.routines
              .filter((routine) => {
                const filterSearch = this.state.filterSearch.toLowerCase();
                return routine.dancers.find((dancer) => dancer.toLowerCase().includes(filterSearch)) || routine.name.toLowerCase().includes(filterSearch) || routine.type.toLowerCase().includes(filterSearch);
                // return routine.dancers.find((dancer) => dancer.toLowerCase().includes(filterSearch)) || routine.name.toLowerCase().includes(filterSearch) || routine.type.toLowerCase().includes(filterSearch);
              })
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((routine, i) => (
                <div className="col" key={i}>
                  <div className="card h-100 shadow">
                    <div className="card-header bg-primary text-white">
                      <div className="d-flex justify-content-start align-items-end">
                        <div className="fs-5 fw-bold">{routine.name}</div>
                        <div className="fw-light text-capitalize ps-2">({routine.type})</div>
                      </div>
                    </div>
                    {/* <div className="d-flex align-items-center py-1 px-3">
                      <div className="flex-fill me-3">
                        <hr />
                      </div>
                      <div>
                        {routine.music ? (
                          <a href={routine.music[0].link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faMusic} className="me-2" />
                            Download Song
                          </a>
                        ) : (
                          <span className="fw-lighter text-muted">Song not available</span>
                        )}
                      </div>
                    </div> */}
                    <div className="card-body">
                      <table className="table table-borderless small">
                        <tbody>
                          {routine.costume ? (
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
                          ) : (
                            false
                          )}
                          {routine.hair ? (
                            <tr>
                              <td className="fw-light text-muted">Hair</td>
                              <td>{routine.hair}</td>
                            </tr>
                          ) : (
                            false
                          )}
                          <tr>
                            <td className="fw-light text-muted text-nowrap">Dancers ({routine.dancers.length})</td>
                            <td className="w-100">
                              {routine.dancers.map((dancer, d) => (
                                <span key={d}>
                                  <span className="text-nowrap">{dancer}</span>
                                  {d + 1 < routine.dancers.length ? <span>, </span> : ""}
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
