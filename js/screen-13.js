import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {ENDPOINTS} from './Constants';

export class AdminManageUser extends Component{
  constructor(props) {
    super(props);
    this.state = {username: "", status : "ALL", flag: "", sortBy: "username", sortDirection: "DESC",
      userList: []
    };

    this.changeUser = this.changeUser.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeFlag = this.changeFlag.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
    this.approveUser = this.approveUser.bind(this);
    this.declineUser = this.declineUser.bind(this);
    this.filter = this.filter.bind(this);
    this.sortItems = this.sortItems.bind(this);
  }

  componentDidMount() {
    // this.filter();
  }

  changeUser(event) {
    this.setState({username: event.target.value});
  }

  changeStatus(event) {
    this.setState({status: event.target.value});
  }

  changeFlag(event) {
    this.setState({flag: event.target.value});
  }

  filter() {
    const args = {
      username: this.state.username,
      status: this.state.status,
      sortBy: this.state.sortBy,
      sortDirection: this.state.sortDirection
    };

    // ajax
    let query = Object.keys(args)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
             .join('&');

    let url = ENDPOINTS.FILTER_USER + '?' + query;

    // ajax
    fetch(url).then(res => res.json()).then((result)=>{
      this.setState({userList: result})
        },
        (error)=>{});
  }

  approveUser(event) {
    const args = {
      username: this.state.flag
    };

    // ajax
    let query = Object.keys(args)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
             .join('&');
    let url = ENDPOINTS.APPROVE_USER + '?' + query;

    fetch(url).then(()=>{
      // refresh
      this.filter();
    }, ()=>{});
  }

  declineUser(event) {
    const args = {
      username: this.state.flag
    };

    // ajax
    let query = Object.keys(args)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
             .join('&');

    let url = ENDPOINTS.DECLINE_USER + '?' + query;

    // ajax
    fetch(url).then(()=>{
      // refresh
      this.filter();
    }, ()=>{});
  }

  renderTableData() {
    return this.state.userList.map((user, index) => {
      const {username, CreditCardCount, userType, status} = user;
      return (
          <tr key={index} className={"p-2"}>
            <td className={"text-center"}><input type={"radio"}
                                                 value={username}
                                                 checked={this.state.flag === username}
                                                 onChange={this.changeFlag}/>{username}</td>
            <td className={"text-center"}>{CreditCardCount}</td>
            <td className={"text-center"}>{userType}</td>
            <td className={"text-center"}>{status}</td>
          </tr>
      )
    });
  }

  sortItems(sortBy, sortDirection) {
    this.setState({
      sortBy: sortBy,
      sortDirection: sortDirection
    }, ()=>{this.filter()});
  }

  render() {
    const sortBys = [{columnName: 'username', text: 'Username'},
      {columnName: 'creditCardCount', text: 'Credit Card Count'},
      {columnName: 'userType', text: 'User Type'},
      {columnName: 'status', text: 'Status'}];
    const sortDirections = ['ASC', 'DESC'];
    const statuses = [{value: 'ALL', text:'--ALL--'},
      {value: 'Declined', text: 'Decline'},
      {value: 'Pending', text: 'Pending'},
      {value: 'Approved', text: 'Approved'}];
    return (
        <div>
          <h1 className={"text-center"}>Manage User</h1>
          <Form>
            <Form.Row className={"p-2"}>
              <Form.Group as={Col} controlId="userName" className={"form-inline"} md={{span:4,offset:2}}>
                <Form.Label className={"p-4"}>Username</Form.Label>
                <Form.Control className={"w-25 m-2"} value={this.state.username} onChange={this.changeUser}/>
              </Form.Group>

              <Form.Group as={Col} controlId="status" className={"form-inline"} md={{span:4,offset:1}}>
                <Form.Label className={"p-4"}>Status</Form.Label>
                <Form.Control as="select" className={"w-25 m-2"} value={this.state.status} onChange={this.changeStatus}>
                  {
                    statuses.map((status, index) => (
                        <option value={status.value} key={index}>{status.text}</option>
                    ))
                  }
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row className={"p-2"}>
              <Col md={{span:2, offset:2}} className={"text-center"}>
                <Button variant={"primary"} size={"lg"} className={"w-100"} onClick={this.filter}>
                  Filter
                </Button>
              </Col>
              <Col md={{span:2, offset:2}} className={"text-center"}>
                <Button variant={"primary"} size={"lg"} className={"w-100"} onClick={this.approveUser}>
                  Approve
                </Button>
              </Col>
              <Col md={{span:2}} className={"text-center"}>
                <Button variant={"primary"} size={"lg"} className={"w-100"} onClick={this.declineUser}>
                  Decline
                </Button>
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

          <Col md={{span:2, offset:5}} className={"text-center"}>
            <Link to={"/AdminOnlyFunction"}>
              <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Back
              </Button>
            </Link>
          </Col>
        </div>
    )
  }
}