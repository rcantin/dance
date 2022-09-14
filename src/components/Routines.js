import React from "react";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Routines extends React.Component {
  constructor() {
    super();
    this.state = {
      routines: [
        {
          name: "Extended Line",
          type: "jazz",
          instructor: "Sarah S.",
          dancers: [
            "Erin Benoit",
            "Kaylinn Brown",
            "Amelia Cantin",
            "Emma Carney",
            "Marina Cekolj",
            "Dawson Chinnick",
            "Quin Chinnick",
            "Alyssa Coccia",
            "Leah Darby",
            "Emily Green",
            "Kaelyn Hine",
            "Karalyn Hotte",
            "Petra Janjic",
            "Naliya Jelinek",
            "Lara Knight",
            "Payton MacLean",
            "Kaitlyn Marsden",
            "Madeline McRoberts",
            "Létizia Mongrain",
            "Knox Niejadlik",
            "Leah Perry",
            "Elle Rasmussen",
            "Adele Somerville",
            "Leah Stevenson",
            "Aubrey Thomson",
            "Aleasia Vachliotis",
            "Ayla Woloszanski",
          ],
        },
        {
          name: "Inter/Senior Tap",
          type: "tap",
          instructor: "David C.",
          dancers: ["Erin Benoit", "Dawson Chinnick", "Emily Green", "Lara Knight"],
        },
        {
          name: "Inter Acro",
          type: "acro",
          instructor: "Bailey W.",
          dancers: ["Kaylinn Brown", "Marina Cekolj", "Alyssa Coccia", "Kaitlyn Marsden", "Leah Perry"],
        },
        {
          name: "Inter Ballet",
          type: "ballet",
          instructor: "Kayleigh N.",
          dancers: ["Kaylinn Brown", "Dawson Chinnick", "Leah Darby", "Emily Green", "Létizia Mongrain", "Adele Somerville", "Ayla Woloszanski"],
        },
        {
          name: "Inter Contemporary Small",
          type: "contemporary",
          instructor: "Kayleigh N.",
          dancers: ["Kaylinn Brown", "Dawson Chinnick", "Leah Darby", "Létizia Mongrain", "Ayla Woloszanski"],
        },
        {
          name: "Inter Jazz Small",
          type: "jazz",
          instructor: "Sarah S.",
          dancers: ["Kaylinn Brown", "Marina Cekolj", "Alyssa Coccia", "Leah Darby"],
        },
        {
          name: "Inter Lyrical",
          type: "lyrical",
          instructor: "Sarah S.",
          dancers: ["Kaylinn Brown", "Marina Cekolj", "Dawson Chinnick", "Alyssa Coccia", "Leah Darby", "Emily Green", "Létizia Mongrain", "Knox Niejadlik"],
        },
        {
          name: "Junior Hip Hop",
          type: "hip hop",
          instructor: "Anthony S.",
          dancers: ["Amelia Cantin", "Marina Cekolj", "Naliya Jelinek", "Knox Niejadlik", "Leah Perry"],
        },
        {
          name: "Junior Acro Small",
          type: "acro",
          instructor: "Bailey W.",
          dancers: ["Emma Carney", "Kaitlyn Marsden", "Madeline McRoberts", "Knox Niejadlik", "Aubrey Thomson", "Aleasia Vachliotis"],
        },
        {
          name: "Junior Ballet",
          type: "ballet",
          instructor: "Kayleigh N.",
          dancers: ["Amelia Cantin", "Emma Carney", "Marina Cekolj", "Alyssa Coccia", "Naliya Jelinek", "Lara Knight", "Payton MacLean", "Kaitlyn Marsden", "Madeline McRoberts", "Knox Niejadlik", "Leah Perry", "Elle Rasmussen", "Aubrey Thomson", "Aleasia Vachliotis"],
        },
        {
          name: "Junior Contemporary Small",
          type: "contemporary",
          instructor: "Sarah S.",
          dancers: ["Marina Cekolj", "Alyssa Coccia", "Lara Knight", "Payton MacLean", "Knox Niejadlik", "Leah Perry"],
        },
        {
          name: "Junior Jazz Small",
          type: "jazz",
          instructor: "Kayleigh N.",
          dancers: ["Emma Carney", "Marina Cekolj", "Lara Knight", "Knox Niejadlik", "Leah Perry", "Elle Rasmussen"],
        },
        {
          name: "Junior Jazz Small",
          type: "jazz",
          instructor: "Sarah S.",
          dancers: ["Payton MacLean", "Kaitlyn Marsden", "Madeline McRoberts", "Knox Niejadlik", "Aubrey Thomson", "Aleasia Vachliotis"],
        },
        {
          name: "Junior Lyrical Large",
          type: "lyrical",
          instructor: "Kayleigh N.",
          dancers: ["Amelia Cantin", "Emma Carney", "Naliya Jelinek", "Lara Knight", "Kaitlyn Marsden", "Madeline McRoberts", "Knox Niejadlik", "Leah Perry", "Elle Rasmussen", "Aubrey Thomson", "Aleasia Vachliotis"],
        },
        {
          name: "Junior Tap",
          type: "tap",
          instructor: "David C.",
          dancers: ["Amelia Cantin", "Emma Carney", "Naliya Jelinek", "Lara Knight", "Kaitlyn Marsden", "Madeline McRoberts", "Elle Rasmussen", "Aubrey Thomson", "Aleasia Vachliotis"],
        },
        {
          name: "Novice Jazz",
          type: "jazz",
          instructor: "Sarah S.",
          dancers: ["Ivy Darby", "Jessica McRoberts", "Kennedy Shantz", "Emily You"],
        },
        {
          name: "Senior Contemporary Small",
          type: "contemporary",
          instructor: "Sarah S.",
          dancers: ["Erin Benoit", "Quin Chinnick", "Kaelyn Hine", "Karalyn Hotte", "Petra Janjic", "Leah Stevenson", "Ayla Woloszanski"],
        },
        {
          name: "Senior Jazz Small",
          type: "jazz",
          instructor: "Sarah S.",
          dancers: ["Erin Benoit", "Quin Chinnick", "Kaelyn Hine", "Karalyn Hotte", "Petra Janjic", "Leah Stevenson"],
        },
        {
          name: "Senior Lyrical",
          type: "lyrical",
          instructor: "Kayleigh N.",
          dancers: ["Erin Benoit", "Quin Chinnick", "Karalyn Hotte", "Petra Janjic", "Leah Stevenson"],
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
              <div className="input-group">
                <span className="input-group-text px-4 py-3" id="basic-addon1">
                  <FontAwesomeIcon icon={faSearch} size="sm" />
                  <span className="ms-1 fw-light">Search</span>
                </span>
                <input value={this.state.filterSearch} onChange={this.changeSearch.bind(this)} type="search" className="form-control px-4 py-3" id="search" placeholder="routine, dancer, style..." autoComplete="off" />
              </div>
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
                      <div className="fw-bold text-uppercase">{item.name}</div>
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

export default Routines;
