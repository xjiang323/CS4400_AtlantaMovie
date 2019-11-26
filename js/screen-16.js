import React, {Component} from "react";
import {Col, Form, Row, Container, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ENDPOINTS} from './Constants';
import DatePicker from "react-datepicker";

export class AdminCompanyDetail extends Component{
    constructor(props){
        super(props);
        this.state = {CompanyName:"Landmark", Employees:["Clara Wilson","James Smith"],
        TheaterList:[{Name:"The Only Theater", Manager:"Clara Wilson", City:"Atlanta", State:"GA", Capacity:"5"}]
        }
    }


        setTableHeader() {
            const headings = {'Name':0, 'Manager':1, 'City':2, 'State':3, 'Capacity':4};
            let header = Object.keys(headings)
            return header.map((key, index) => {
                return <th key={index}>{key}</th>
            })
        }

        renderTableData() {
            return this.state.TheaterList.map((company_info, index) => {
                const {Name, Manager, City, State, Capacity} = company_info;
                return (
                    <tr key={index}>
                        <td>{Name}</td>
                        <td>{Manager}</td>
                        <td>{City}</td>
                        <td>{State}</td>
                        <td>{Capacity}</td>
                    </tr>
                )
            });
        }

        render(){
            return(

                <div>
                    <h1 className={"text-center"}>Company Detail</h1>
                    <Form>
                        <Form.Row className={"p-2"}>
                            <Form.Group as={Col} controlId="moviename" className={"form-inline"} md={{span:4,offset:2}}>
                                <Form.Label className={"p-4"}>Name</Form.Label>
                                <Form.Label className={"p-4"}>{this.state.CompanyName}</Form.Label>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className={"p-2"}>
                            <Form.Group as={Col} controlId="moviename" className={"form-inline"} md={{span:4,offset:2}}>
                                <Form.Label className={"p-4"}>Employees</Form.Label>
                                <Form.Label className={"p-4"}>{this.state.Employees}</Form.Label>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className={"p-2"}>
                            <Form.Group as={Col} controlId="Theaters" className={"form-inline"} md={{span:4,offset:5}}>
                                <Form.Label className={"p-4"}>Theaters</Form.Label>
                            </Form.Group>
                        </Form.Row>

                        <Col md={{span:8, offset:2}}>
                            <Table striped bordered hover>
                                <thead>
                                <tr>{this.setTableHeader()}</tr>
                                </thead>
                                <tbody>
                                {this.renderTableData()}
                                </tbody>
                            </Table>
                        </Col>


                        <Col md={{span:2, offset:5}} className={"text-center"}>
                            <Link to={"/manageCompany"}>
                                <Button variant={"primary"} size={"lg"} className={"w-100"}>
                                    Back
                                </Button>
                            </Link>
                        </Col>

                    </Form>
                </div>
            )
        }
    }


