import React from "react";
import "bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekdays: [
        { ord: 1, day: "monday", message: "" },
        { ord: 2, day: "tuesday", message: "No classes" },
        { ord: 3, day: "wednesday", message: "" },
        { ord: 4, day: "thursday", message: "" },
        { ord: 5, day: "friday", message: "No classes" },
        { ord: 6, day: "saturday", message: "" },
        { ord: 7, day: "sunday", message: "No classes" },
      ],
      dancer: "Amelia",
      filterSearch: "",
      error: null,
      isLoaded: false,
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ dancer: event.target.value });
    localStorage.setItem("dancer", event.target.value);
  }

  handleSubmit(event) {
    this.getScheduleAPIData();
    event.preventDefault();
  }

  getScheduleAPIData() {
    this.setState({
      isLoaded: false,
      items: [],
    });
    fetch(`https://vfrcreative.com/api/index.php?dancer=${this.state.dancer}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.getScheduleAPIData();
  }

  changeSearch(e) {
    this.setState({
      filterSearch: e.target.value,
    });
  }

  render() {
    const timeCell = {
      lineHeight: "1.1em",
      width: "95px",
      height: "70px",
    };
    return (
      <div>
        <div className="container py-5">
          <h1>Class Schedule</h1>
          {/* <form onSubmit={this.handleSubmit}>
            <div className="input-group input-group-lg mb-3">
              <select className="form-select" value={this.state.dancer} onChange={this.handleChange}>
                <option value="Amelia">Amelia</option>
                <option value="Ryan">Ryan</option>
              </select>
              <button className="btn btn-primary text-white" type="submit" id="button-addon2">
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>
          </form> */}
          {/* <div className="card shadow">
            <div className="card-body">
              {this.state.isLoaded ? (
                <div>
                  {this.state.weekdays.map((weekday, di) => (
                    <div key={di} className="mb-4">
                      <div className="h4 text-capitalize">{weekday.day}</div>
                      {this.state.items
                        .filter((item) => {
                          return item.day === weekday.day;
                        })
                        .sort((a, b) => (a.start_time > b.start_time ? 1 : -1))
                        .map((item, ci) => (
                          <div key={ci} className="pb-1">
                            <div>{item.length}</div>
                            <div className="fw-bold">{item.name}</div>
                            <div className="small">
                              {moment(item.start_time).format("h:mm A")} - {moment(item.end_time).format("h:mm A")}
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              ) : (
                "loading..."
              )}
            </div>
          </div> */}
          {this.state.isLoaded ? (
            <div>
              {this.state.weekdays.map((weekday, di) => (
                <div key={di} className="py-3">
                  <div className="d-flex">
                    <div className="h3 mb-0 text-capitalize">{weekday.day}</div>
                    <div className="w-100 ps-3">
                      <hr />
                    </div>
                  </div>
                  <div className="fw-light">{weekday.message}</div>
                  {this.state.items
                    .filter((classdata) => {
                      return classdata.day === weekday.day;
                    })
                    .sort((a, b) => (a.start_time > b.start_time ? 1 : -1))
                    .map((classdata, ci) => (
                      <div key={ci} className="d-flex justify-content-start align-items-center my-2">
                        {classdata.start_time ? (
                          <div className="d-flex justify-content-center align-items-center flex-column text-nowrap text-center text-white bg-primary p-1" style={timeCell}>
                            <div className="fw-bold">{moment(classdata.start_time).format("h:mm A")}</div>
                            <div className="small fw-lighter">TO</div>
                            <div className="fw-bold">{moment(classdata.end_time).format("h:mm A")}</div>
                          </div>
                        ) : (
                          false
                        )}
                        <div className="w-100 ps-3">
                          <div className="h5 mb-0">{classdata.name}</div>
                          <div className="h5 mb-0 fw-light">{classdata.instructor}</div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-3">
              <FontAwesomeIcon icon={faSpinner} pulse />
              <span className="ms-1">Getting data...</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Classes;
