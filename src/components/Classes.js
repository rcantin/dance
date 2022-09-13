import React from "react";
import "bootstrap";
import moment from "moment";

class Classes extends React.Component {
  constructor() {
    super();
    this.state = {
      weekdays: [
        { day: "monday", message: "School bus - come straight home" },
        { day: "tuesday", message: "Dream Centre bus - change when you get there" },
        { day: "wednesday", message: "School bus - come straight home" },
        { day: "thursday", message: "Dream Centre bus - change when you get there" },
        { day: "saturday", message: "Relax - it's Saturday!" },
      ],
      classes: [
        {
          name: "Stretch",
          day: "monday",
          start: "2022-01-01T17:30:00",
          end: "2022-01-01T18:30:00",
          instructor: "Kayleigh",
        },
        {
          name: "Ballet Tech",
          day: "monday",
          start: "2022-01-01T18:30:00",
          end: "2022-01-01T19:30:00",
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
          name: "Ballet Tech",
          day: "tuesday",
          start: "2022-01-01T16:30:00",
          end: "2022-01-01T17:30:00",
          instructor: "Irina",
        },
        {
          name: "Assistant - Ballet",
          day: "tuesday",
          start: "2022-01-01T17:30:00",
          end: "2022-01-01T18:15:00",
          instructor: "Sami",
        },
        {
          name: "Hip Hop Tech",
          day: "wednesday",
          start: "2022-01-01T17:30:00",
          end: "2022-01-01T18:30:00",
          instructor: "Anthony",
        },
        {
          name: "Hip Hop Choreo",
          day: "wednesday",
          start: "2022-01-01T18:30:00",
          end: "2022-01-01T19:15:00",
          instructor: "Anthony",
        },
        {
          name: "Lyrical Large Choreo",
          day: "wednesday",
          start: "2022-01-01T19:15:00",
          end: "2022-01-01T20:15:00",
          instructor: "Kayleigh",
        },
        {
          name: "Gym",
          day: "thursday",
          start: "2022-01-01T16:30:00",
          end: "2022-01-01T17:30:00",
          instructor: "Brittany",
        },
        {
          name: "Tap Tech",
          day: "thursday",
          start: "2022-01-01T18:00:00",
          end: "2022-01-01T18:45:00",
          instructor: "David",
        },
        {
          name: "Tap Choreo",
          day: "thursday",
          start: "2022-01-01T18:45:00",
          end: "2022-01-01T19:30:00",
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
    return (
      <div>
        <div className="container py-5">
          <h1>Class Schedule</h1>
          <table className="table table-borderless">
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
          </table>
        </div>
      </div>
    );
  }
}

export default Classes;
