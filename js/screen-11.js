import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export class CustomerFunctionality extends Component{
  render() {
    return (
        <div>
          <h1 className={"text-center"}>Customer Functionality</h1>
          <Row className={"p-2"}>
            <Col md={{span:2, offset:4}} className={"text-center"}>
              <Link to={"/customerExploreMovie"}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Explore Movie
                </Button>
              </Link>
            </Col>
            <Col md={{span:2}} className={"text-center"}>
              <Link to={"/customerViewHistory"}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                View History
                </Button>
              </Link>
            </Col>
          </Row>

          <Row className={"p-2"}>
            <Col md={{span:2, offset:4}} className={"text-center"}>
              <Link to={"/userExploreTheater"}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Explore Theater
                </Button>
              </Link>
            </Col>
            <Col md={{span:2}} className={"text-center"}>
              <Link to={"/userVisitHistory"}>
                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                Visit History
                </Button>
              </Link>
            </Col>
          </Row>

          <Row className={"p-2"}>
            <Col md={{span:2, offset:5}} className={"text-center"}>
              <Link to={"/login"}>
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