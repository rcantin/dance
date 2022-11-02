import React from "react";
import "bootstrap";
import moment from "moment";

class Classes extends React.Component {
  constructor() {
    super();
    this.state = {
      weekdays: [
        { day: "monday", message: "" },
        { day: "tuesday", message: "No classes" },
        { day: "wednesday", message: "" },
        { day: "thursday", message: "" },
        { day: "friday", message: "No classes" },
        { day: "saturday", message: "" },
        { day: "sunday", message: "No classes" },
      ],
      dancer: "Amelia",
      filterSearch: "",
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
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
            <div className="py-3 fw-light">Getting data...</div>
          )}

          {/* <table className="table table-borderless">
            {this.state.weekdays.map((weekday, di) => (
              <tbody key={di}>
                <tr>
                  <th colSpan="3">
                    <hr />
                    <div className="text-capitalize fw-light fs-2">{weekday.day}</div>
                    <div className="fw-light small">{weekday.message}</div>
                  </th>
                </tr>
                {this.state.classes
                  .filter((classdata) => {
                    return classdata.day === weekday.day;
                  })
                  .sort((a, b) => (a.start > b.start ? 1 : -1))
                  .map((classdata, ci) => (
                    <tr key={ci}>
                      <td className="text-nowrap fw-bold">
                        {moment(classdata.start).format("h:mmA")} - {moment(classdata.end).format("h:mmA")}
                      </td>
                      <td className="w-100">
                        <div className="fw-bold">{classdata.name}</div>
                        <div className="small fw-light">{classdata.instructor}</div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            ))}
          </table> */}
        </div>
      </div>
    );
  }
}

export default Classes;
