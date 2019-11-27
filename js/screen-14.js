import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {ENDPOINTS} from "./Constants";

export class AdminManageCompany extends Component{
  constructor(props) {
    super(props);
    this.state = {comName: "all", minCity: "", maxCity: "", minTheater: "", maxTheater: "",
                  minEmployee: "", maxEmployee: "", detailed: "", sortBy: "comName", sortDirection: "DESC",
                  companyList:[], comDropdownList:[]
    }
    this.changeCompany = this.changeCompany.bind(this);
    this.changeMinCity = this.changeMinCity.bind(this);
    this.changeMaxCity = this.changeMaxCity.bind(this);
    this.changeMinTheater = this.changeMinTheater.bind(this);
    this.changeMaxTheater = this.changeMaxTheater.bind(this);
    this.changeMinEmployee = this.changeMinEmployee.bind(this);
    this.changeMaxEmployee = this.changeMaxEmployee.bind(this);
    this.changeDetailed = this.changeDetailed.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
    this.filter = this.filter.bind(this);
    this.obtainCom = this.obtainCom.bind(this);
    this.sortItems = this.sortItems.bind(this);
  }

  componentDidMount() {
    this.obtainCom();
  }

  changeCompany(event) {
    this.setState({comName: event.target.value});
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

  obtainCom() {
    let url = ENDPOINTS.OBTAIN_COMPANY;
    fetch(url).then(res => res.json()).then((result)=>{
      this.setState({comDropdownList: result})
        },
        (error)=>{});
  }

  filter() {
    const args = {
      comName: this.state.comName,
      minCity: this.state.minCity,
      maxCity: this.state.maxCity,
      minTheater: this.state.minTheater,
      maxTheater: this.state.maxTheater,
      minEmployee: this.state.minEmployee,
      maxEmployee: this.state.maxEmployee,
      sortBy: this.state.sortBy,
      sortDirection: this.state.sortDirection
    };

    // ajax
    let query = Object.keys(args)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
             .join('&');

    let url = ENDPOINTS.FILTER_COMPANY + '?' + query;

    // ajax
    fetch(url).then(res => res.json()).then((result)=>{
      this.setState({companyList: result})
        },
        (error)=>{});
  }

  renderTableData() {
    return this.state.companyList.map((company, index) => {
      const {comName, numCityCover, numTheater, numEmployee} = company;
      return (
          <tr key={index}>
            <td className={"text-center"}><input type={"radio"}
                                                 value={comName}
                                                 checked={this.state.detailed === comName}
                                                 onChange={this.changeDetailed}/>{comName}</td>
            <td className={"text-center"}>{numCityCover}</td>
            <td className={"text-center"}>{numTheater}</td>
            <td className={"text-center"}>{numEmployee}</td>
          </tr>
      )
    })
  }

  sortItems(sortBy, sortDirection) {
    this.setState({
      sortBy: sortBy,
      sortDirection: sortDirection
    }, ()=>{this.filter()});
  }

  render() {
    const sortBys = [{columnName: 'comName', text: 'Name'},
      {columnName: 'numCityCover', text: '#CityCovered'},
      {columnName: 'numTheater', text: '#Theater'},
      {columnName: 'numEmployee', text: '#Employee'}];
    const sortDirections = ['ASC', 'DESC'];
    const companies = this.state.comDropdownList;
    return (
        <div>
          <h1 className={"text-center"}>Manage Company</h1>
          <Form>
            <Form.Row className={"p-2"}>
              <Form.Group as={Col} controlId="companyName" className={"form-inline"} md={{span:4,offset:2}}>
                <Form.Label className={"p-4"}>Name</Form.Label>
                <Form.Control as="select" className={"w-25 m-2"} value={this.state.name} onChange={this.changeCompany}>
                  <option value="all">--ALL--</option>
                  {
                    companies.map((company, index) => (
                        <option value={company.comName} key={index}>{company.comName}</option>
                    ))
                  }
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
                <Button variant={"primary"} size={"lg"} className={"w-100"} onClick={this.filter}>
                Filter
                </Button>
              </Col>
              <Col md={{span:2, offset:3}} className={"text-center"}>
                <Link to={{pathname: "/createTheater", param1: this.state.detailed}}>
                  <Button variant={"primary"} size={"lg"} className={"w-100"}>
                  Create Theater
                  </Button>
                </Link>
              </Col>
              <Col md={{span:1}} className={"text-center"}>
                <Link to={{pathname: "/companyDetail", param1: this.state.detailed}}>
                  <Button variant={"primary"} size={"lg"} className={"w-100"}>
                  Detail
                  </Button>
                </Link>
              </Col>
            </Form.Row>
          </Form>

          <Col md={{span:10, offset:1}}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {
                    sortBys.map((sortBy, index) => (
                    <th className="text-center" key={index}>
                      <b className="mr-4">{sortBy.text}</b>
                      <i className="fa fa-angle-up fa-lg"
                         onClick={() => this.sortItems(sortBy.columnName, sortDirections[0])}/>
                      <i className="fa fa-angle-down fa-lg"
                         onClick={() => this.sortItems(sortBy.columnName, sortDirections[1])}/>
                    </th>))
                  }
                </tr>
              </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </Table>
          </Col>

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