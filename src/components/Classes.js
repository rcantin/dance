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
      classes: [
        {
          name: "Ballet Tech",
          day: "monday",
          start: "2022-01-01T16:30:00",
          end: "2022-01-01T17:30:00",
          instructor: "Irina",
        },
        {
          name: "Stretch and Tech",
          day: "monday",
          start: "2022-01-01T17:30:00",
          end: "2022-01-01T18:30:00",
          instructor: "Cait",
        },
        {
          name: "Ballet Solo",
          day: "monday",
          start: "2022-01-01T18:30:00",
          end: "2022-01-01T19:00:00",
          instructor: "Irina",
        },
        {
          name: "Ballet Choreo",
          day: "monday",
          start: "2022-01-01T19:30:00",
          end: "2022-01-01T20:30:00",
          instructor: "Kayleigh",
        },
        {
          name: "Hip Hop Duet",
          day: "wednesday",
          start: "2022-01-01T15:30:00",
          end: "2022-01-01T16:00:00",
          instructor: "Anthony",
        },
        {
          name: "Hip Hop Solo",
          day: "wednesday",
          start: "2022-01-01T16:00:00",
          end: "2022-01-01T16:30:00",
          instructor: "Anthony",
        },
        {
          name: "Hip Hop Tech",
          day: "wednesday",
          start: "2022-01-01T16:30:00",
          end: "2022-01-01T17:30:00",
          instructor: "Anthony",
        },
        {
          name: "Ballet Tech",
          day: "wednesday",
          start: "2022-01-01T17:30:00",
          end: "2022-01-01T18:30:00",
          instructor: "Kayleigh",
        },
        {
          name: "Hip Hop Choreo",
          day: "wednesday",
          start: "2022-01-01T18:30:00",
          end: "2022-01-01T19:15:00",
          instructor: "Anthony",
        },
        {
          name: "Lyrical Choreo",
          day: "wednesday",
          start: "2022-01-01T19:30:00",
          end: "2022-01-01T20:15:00",
          instructor: "Kayleigh",
        },
        {
          name: "Tap Tech",
          day: "thursday",
          start: "2022-01-01T18:45:00",
          end: "2022-01-01T19:30:00",
          instructor: "David",
        },
        {
          name: "Tap Choreo",
          day: "thursday",
          start: "2022-01-01T19:30:00",
          end: "2022-01-01T20:15:00",
          instructor: "David",
        },
        {
          name: "Extended Line",
          day: "saturday",
          start: "2022-01-01T11:30:00",
          end: "2022-01-01T12:30:00",
          instructor: "Sarah",
        },
        {
          name: "Jazz Tech",
          day: "saturday",
          start: "2022-01-01T12:30:00",
          end: "2022-01-01T13:30:00",
          instructor: "Sarah",
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
    const timeCell = {
      lineHeight: "1.1em",
      width: "95px",
      height: "70px",
    };
    return (
      <div>
        <div className="container py-5">
          <h1>Class Schedule</h1>

          {/* <div className="alert alert-danger shadow">
            <strong>CONFLICT:</strong> Wednesday Inter Hip Hop Tech overlaps with Lyrical Choreo
          </div> */}

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
                {this.state.classes
                  .filter((classdata) => {
                    return classdata.day === weekday.day;
                  })
                  .sort((a, b) => (a.start > b.start ? 1 : -1))
                  .map((classdata, ci) => (
                    <div key={ci} className="d-flex justify-content-start align-items-center my-2">
                      {classdata.start ? (
                        <div className="d-flex justify-content-center align-items-center flex-column text-nowrap text-center text-white bg-primary p-1" style={timeCell}>
                          <div className="fw-bold">{moment(classdata.start).format("h:mm A")}</div>
                          <div className="small fw-lighter">TO</div>
                          <div className="fw-bold">{moment(classdata.end).format("h:mm A")}</div>
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
