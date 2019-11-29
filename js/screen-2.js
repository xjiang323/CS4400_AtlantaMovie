import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export class RegisterNavigation extends Component{
    render() {
        return (
            <div>
                <h1 className={"text-center"}>Register Navigation</h1>
                <Row className={"p-2"}>
                    <Col md={{span:2, offset:5}} className={"text-center"}>
                        <Link to={"/UserOnlyReg"}>
                            <Button variant={"primary"} size={"lg"} className={"w-100"}>
                                User Only
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row className={"p-2"}>
                    <Col md={{span:2, offset:5}} className={"text-center"}>
                        <Link to={"/CustomerReg"}>
                            <Button variant={"primary"} size={"lg"} className={"w-100"}>
                                Customer Only
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row className={"p-2"}>
                    <Col md={{span:2, offset:5}} className={"text-center"}>
                        <Link to={"/ManagerReg"}>
                            <Button variant={"primary"} size={"lg"} className={"w-100"}>
                                Manager Only
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row className={"p-2"}>
                    <Col md={{span:2, offset:5}} className={"text-center"}>
                        <Link to={"/ManagerCustomerReg"}>
                            <Button variant={"primary"} size={"lg"} className={"w-100"}>
                                Manager-Customer
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row className={"p-2"}>
                    <Col md={{span:2, offset:5}} className={"text-center"}>
                        <Link to={"/"}>
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