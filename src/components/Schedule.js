import React from "react";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      routines: [
        {
          name: "Extended Line",
          type: "jazz",
          instructor: "Sarah S.",
        },
        {
          name: "Inter/Senior Tap",
          type: "tap",
          instructor: "David C.",
        },
        {
          name: "Inter Acro",
          type: "acro",
          instructor: "Bailey W.",
        },
        {
          name: "Inter Ballet",
          type: "ballet",
          instructor: "Kayleigh N.",
        },
        {
          name: "Inter Contemporary Small",
          type: "contemporary",
          instructor: "Kayleigh N.",
        },
        {
          name: "Inter Jazz Small",
          type: "jazz",
          instructor: "Sarah S.",
        },
        {
          name: "Inter Lyrical",
          type: "lyrical",
          instructor: "Sarah S.",
        },
        {
          name: "Junior Hip Hop",
          type: "hip hop",
          instructor: "Anthony S.",
        },
        {
          name: "Junior Acro Small",
          type: "acro",
          instructor: "Bailey W.",
        },
        {
          name: "Junior Ballet",
          type: "ballet",
          instructor: "Kayleigh N.",
        },
        {
          name: "Junior Contemporary Small",
          type: "contemporary",
          instructor: "Sarah S.",
        },
        {
          name: "Junior Jazz Small",
          type: "jazz",
          instructor: "Kayleigh N.",
        },
        {
          name: "Junior Jazz Small",
          type: "jazz",
          instructor: "Sarah S.",
        },
        {
          name: "Junior Lyrical Large",
          type: "lyrical",
          instructor: "Kayleigh N.",
        },
        {
          name: "Junior Tap",
          type: "tap",
          instructor: "David C.",
        },
        {
          name: "Novice Jazz",
          type: "jazz",
          instructor: "Sarah S.",
        },
        {
          name: "Senior Contemporary Small",
          type: "contemporary",
          instructor: "Sarah S.",
        },
        {
          name: "Senior Jazz Small",
          type: "jazz",
          instructor: "Sarah S.",
        },
        {
          name: "Senior Lyrical",
          type: "lyrical",
          instructor: "Kayleigh N.",
        },
      ],
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
          <div className="row g-4 g-xl-5 mb-5 justify-content-between align-items-end">
            <div className="col">
              <h1 className="mb-0">Routines</h1>
              <div className="fw-light">This page contains all of the choreo routines that will be performed in competition. As more information is learned, it will be added to this page, including songs, costumes, hair, etc...</div>
            </div>
            <div className="col-12 col-lg-5 col-xxl-5 offset-lg-1 offset-xxl-2">
              <input value={this.state.filterSearch} onChange={this.changeSearch.bind(this)} type="search" className="form-control px-4 py-3" id="search" placeholder="Search for routine, dancer, style..." autoComplete="off" />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4 g-xl-5">
            {this.state.routines
              .filter((item) => {
                const filterSearch = this.state.filterSearch.toLowerCase();
                return item.dancers.find((dancer) => dancer.toLowerCase().includes(filterSearch)) || item.name.toLowerCase().includes(filterSearch) || item.type.toLowerCase().includes(filterSearch);
              })
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((item, i) => (
                <div className="col" key={i}>
                  <div className="card h-100 shadow">
                    <div className="card-header bg-primary text-white">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold text-uppercase">{item.name}</div>
                        <div>
                          <FontAwesomeIcon icon={faHeartRegular} size="lg" />
                          <FontAwesomeIcon icon={faHeartSolid} size="lg" />
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <table className="table">
                        <tbody>
                          {item.type ? (
                            <tr>
                              <td className="fw-light text-muted">Style</td>
                              <td className="text-capitalize w-75">{item.type}</td>
                            </tr>
                          ) : (
                            false
                          )}
                          {item.instructor ? (
                            <tr>
                              <td className="fw-light text-muted">Instructor</td>
                              <td className="text-capitalize">{item.instructor}</td>
                            </tr>
                          ) : (
                            false
                          )}
                          {item.music ? (
                            <tr>
                              <td className="fw-light text-muted">Music</td>
                              <td className="text-capitalize">
                                <a href={item.music} target="_blank" rel="noreferrer">
                                  Download...
                                </a>
                              </td>
                            </tr>
                          ) : (
                            false
                          )}
                          {item.routine ? (
                            <tr>
                              <td className="fw-light text-muted">Routine Name</td>
                              <td className="text-capitalize">{item.routine}</td>
                            </tr>
                          ) : (
                            false
                          )}
                          {item.dancers ? (
                            <tr>
                              <td colSpan="2" className="pt-4">
                                <div className="fw-light text-muted mb-2">Dancers ({item.dancers.length})</div>
                                <div className="fw-light small">{item.dancers.sort((a, b) => (a > b ? 1 : -1)).join(", ")}</div>
                              </td>
                            </tr>
                          ) : (
                            false
                          )}
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

export default Schedule;
