import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export class AdminManageUser extends Component{
  constructor(props) {
    super(props);
    this.state = {username: "", status : "all", flag: "", sortBy: "username", sortDirect: "Desc",
      userList: [{userName: 'Anjian', creditCardCount: 1, userType: 'Customer', status: 'Pending'},
                 {userName: 'Xiaotong', creditCardCount: 5, userType: 'Manager', status: 'Approved'}]
    };

    this.changeUser = this.changeUser.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeFlag = this.changeFlag.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
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

  renderTableData() {
    return this.state.userList.map(user => {
      const {userName, creditCardCount, userType, status} = user;
      return (
          <tr key={userName} className={"p-2"}>
            <td className={"text-center"}><input type={"radio"}
                                                 value={userName}
                                                 checked={this.state.flag === userName}
                                                 onChange={this.changeFlag}/>{userName}</td>
            <td className={"text-center"}>{creditCardCount}</td>
            <td className={"text-center"}>{userType}</td>
            <td className={"text-center"}>{status}</td>
          </tr>
      )
    })
  }

  render() {
    return (
        <div>
          <h1 className={"text-center"}>Manage User</h1>
          <Form>
            <Form.Row className={"p-2"}>
              <Form.Group as={Col} controlId="userName" className={"form-inline"} md={{span:4,offset:2}}>
                <Form.Label className={"p-4"}>Username</Form.Label>
                <Form.Control className={"w-25 m-2"} value={this.state.username} onChange={this.changeUser}/>
              </Form.Group>

              <Form.Group as={Col} controlId="status" className={"form-inline"} md={{span:4}}>
                <Form.Label className={"p-4"}>Status</Form.Label>
                <Form.Control as="select" className={"w-25 m-2"} value={this.state.status} onChange={this.changeStatus}>
                  <option value="all">--ALL--</option>
                  <option value="decline">Decline</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                </Form.Control>
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
              <Col md={{span:2, offset:2}} className={"text-center"}>
                <Link to={""}>
                  <Button variant={"primary"} size={"lg"} className={"w-100"}>
                  Approve
                  </Button>
                </Link>
              </Col>
              <Col md={{span:2}} className={"text-center"}>
                <Link to={""}>
                  <Button variant={"primary"} size={"lg"} className={"w-100"}>
                  Decline
                  </Button>
                </Link>
              </Col>
            </Form.Row>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className={"text-center"}>Username</th>
                <th className={"text-center"}>Credit Card Count</th>
                <th className={"text-center"}>User Type</th>
                <th className={"text-center"}>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </Table>

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