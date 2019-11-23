import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export class AdminManageCompany extends Component{
  constructor(props) {
    super(props);
    this.state = {name: "all", minCity: "", maxCity: "", minTheater: "", maxTheater: "",
                  minEmployee: "", maxEmployee: "", detailed: "",
                  companyList:[{name: "AMC", city: 2, theater: 1, Employee: 1},
                               {name: "Regal", city: 1, theater: 2, Employee: 5}]
    }
    this.changeCompany = this.changeCompany.bind(this);
    this.changeMinCity = this.changeMinCity.bind(this);
    this.changeMaxCity = this.changeMaxCity.bind(this);
    this.changeMinTheater = this.changeMinTheater.bind(this);
    this.changeMaxTheater = this.changeMaxTheater.bind(this);
    this.changeMinEmployee = this.changeMinEmployee.bind(this);
    this.changeMaxEmployee = this.changeMaxEmployee.bind(this);
    this.changeDetailed = this.changeDetailed.bind(this);
  }

  changeCompany(event) {
    this.setState({name: event.target.value});
  }

  changeMinCity(event) {
    this.setState({minCity: event.target.value});
  }

  changeMaxCity(event) {
    this.setState({maxCity: event.target.value});
  }

  changeMinTheater(event) {
    this.setState({minTheater: event.target.value});
  }

  changeMaxTheater(event) {
    this.setState({maxTheater: event.target.value});
  }

  changeMinEmployee(event) {
    this.setState({minEmployee: event.target.value});
  }

  changeMaxEmployee(event) {
    this.setState({maxEmployee: event.target.value});
  }

  changeDetailed(event) {
    this.setState({detailed: event.target.value});
  }

  renderTableData() {
    return this.state.companyList.map(company => {
      const {name, city, theater, Employee} = company;
      return (
          <tr key={name} className={"p-2"}>
            <td className={"text-center"}><input type={"radio"}
                                                 value={name}
                                                 checked={this.state.detailed === name}
                                                 onChange={this.changeDetailed}/>{name}</td>
            <td className={"text-center"}>{city}</td>
            <td className={"text-center"}>{theater}</td>
            <td className={"text-center"}>{Employee}</td>
          </tr>
      )
    })
  }

  render() {
    return (
        <div>
          <h1 className={"text-center"}>Manage Company</h1>
          <Form>
            <Form.Row className={"p-2"}>
              <Form.Group as={Col} controlId="companyName" className={"form-inline"} md={{span:4,offset:2}}>
                <Form.Label className={"p-4"}>Name</Form.Label>
                <Form.Control as="select" className={"w-25 m-2"} value={this.state.name} onChange={this.changeCompany}>
                  <option value="all">--ALL--</option>
                  <option value="amc">AMC</option>
                  <option value="regal">Regal</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="cityCover" className={"form-inline"} md={{span:4}}>
                <Form.Label className={"p-4"}># City Covered</Form.Label>
                <Form.Control type="number" className={"w-25 m-2"} value={this.state.minCity} onChange={this.changeMinCity}/>
                <Form.Label>--</Form.Label>
                <Form.Control type="number" className={"w-25 m-2"} value={this.state.maxCity} onChange={this.changeMaxCity}/>
              </Form.Group>
            </Form.Row>

            <Form.Row className={"p-2"}>
              <Form.Group as={Col} controlId="theater" className={"form-inline"} md={{span:4,offset:2}}>
                <Form.Label className={"p-4"}># Theaters</Form.Label>
                <Form.Control type="number" className={"w-25 m-2"} value={this.state.minTheater} onChange={this.changeMinTheater}/>
                <Form.Label>--</Form.Label>
                <Form.Control type="number" className={"w-25 m-2"} value={this.state.maxTheater} onChange={this.changeMaxTheater}/>
              </Form.Group>

              <Form.Group as={Col} controlId="cityCover" className={"form-inline"} md={{span:4}}>
                <Form.Label className={"p-4"}># Employees</Form.Label>
                <Form.Control type="number" className={"w-25 m-2"} value={this.state.minEmployee} onChange={this.changeMinEmployee}/>
                <Form.Label>--</Form.Label>
                <Form.Control type="number" className={"w-25 m-2"} value={this.state.maxEmployee} onChange={this.changeMaxEmployee}/>
              </Form.Group>
            </Form.Row>

            <Form.Row className={"p-2"}>
              <Col md={{span:2, offset:2}} className={"text-center"}>
                <Link to={""}>
                  <Button variant={"primary"} size={"lg"} className={"w-100"}>
                  Filter
                  </Button>
                </Link>
              </Col>
              <Col md={{span:2, offset:3}} className={"text-center"}>
                <Link to={""}>
                  <Button variant={"primary"} size={"lg"} className={"w-100"}>
                  Create Theater
                  </Button>
                </Link>
              </Col>
              <Col md={{span:1}} className={"text-center"}>
                <Link to={""}>
                  <Button variant={"primary"} size={"lg"} className={"w-100"}>
                  Detail
                  </Button>
                </Link>
              </Col>
            </Form.Row>
          </Form>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th className={"text-center"}>Name</th>
                <th className={"text-center"}>#CityCovered</th>
                <th className={"text-center"}>#Theater</th>
                <th className={"text-center"}>#Employee</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </Table>

          <Col md={{span:2, offset:5}} className={"text-center"} className={"p-2"}>
            <Link to={"/AdminOnlyFunction"}>
              <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Back
              </Button>
            </Link>
          </Col>
        </div>
    );
  }
}


