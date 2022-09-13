import React from "react";
import "bootstrap";
import GlossaryData from "../glossary.json";

class Glossary extends React.Component {
  constructor() {
    super();
    this.state = {
      glossary: GlossaryData,
      search: "",
    };
  }

  changeSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-2 g-2 mb-5 justify-content-between align-items-center">
            <div className="col">
              <h1 className="mb-0">Glossary</h1>
            </div>
            <div className="col">
              <input value={this.state.search} onChange={this.changeSearch.bind(this)} type="search" className="form-control form-control-lg" id="search" placeholder="Search..." />
            </div>
          </div>
          <div className="card shadow">
            <div className="card-body">
              <div className="container-fluid">
                {this.state.glossary
                  .filter((item) => {
                    const search = this.state.search.toLowerCase();
                    return item.term.toLowerCase().includes(search) || item.definition.toLowerCase().includes(search);
                  })
                  .sort((a, b) => (a.term > b.term ? 1 : -1))
                  .map((item, i) => (
                    <div key={i}>
                      <div className="row p-3 p-lg-4">
                        <div className="col-12 col-md-4 col-lg-3 fw-bold text-md-end">{item.term}</div>
                        <div className="col fw-light">{item.definition}</div>
                      </div>
                      <hr className="bg-secondary" />
                    </div>
                  ))}
              </div>
              {/* <table className="table">
                <tbody>
                  {this.state.glossary
                    .filter((item) => {
                      const search = this.state.search.toLowerCase();
                      return item.term.toLowerCase().includes(search) || item.definition.toLowerCase().includes(search);
                    })
                    .sort((a, b) => (a.term > b.term ? 1 : -1))
                    .map((item, i) => (
                      <tr key={i}>
                        <td className="p-3 fw-bold text-end">{item.term}</td>
                        <td className="p-3 fw-light w-75">{item.definition}</td>
                      </tr>
                    ))}
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Glossary;
