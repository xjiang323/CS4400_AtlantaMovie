import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export class AdminOnlyFunctionality extends Component{
  render() {
    return (
        <div>
          <h1 className={"text-center"}>Admin-Only Functionality</h1>
          <Row className={"p-2"}>
            <Col md={{span:3, offset:3}} className={"text-center"}>
              <Link to={""}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Manager User
                </Button>
              </Link>
            </Col>
            <Col md={{span:3}} className={"text-center"}>
              <Link to={""}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Explore Theater
                </Button>
              </Link>
            </Col>
          </Row>

          <Row className={"p-2"}>
            <Col md={{span:3, offset:3}} className={"text-center"}>
              <Link to={""}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Manage Company
                </Button>
              </Link>
            </Col>
            <Col md={{span:3}} className={"text-center"}>
              <Link to={""}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Visit History
                </Button>
              </Link>
            </Col>
          </Row>

          <Row className={"p-2"}>
            <Col md={{span:3, offset:3}} className={"text-center"}>
              <Link to={""}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Create Movie
                </Button>
              </Link>
            </Col>
            <Col md={{span:3}} className={"text-center"}>
              <Link to={""}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Back
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
    )
  }
}
