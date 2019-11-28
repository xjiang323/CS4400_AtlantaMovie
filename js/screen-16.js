import React, {Component} from "react";
import {Col, Form, Row, Container, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ENDPOINTS} from './Constants';

export class AdminCompanyDetail extends Component{
    constructor(props){
        super(props);
        this.state = {CompanyName:"", Employees:[], TheaterList:[]}
        this.obtainEmployee = this.obtainEmployee.bind(this);
        this.obtainTheater = this.obtainTheater.bind(this);
        this.setTableHeader = this.setTableHeader.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
        this.renderEmployee = this.renderEmployee.bind(this);
        this.getComName = this.getComName.bind(this);
    }

    componentDidMount() {
        this.getComName();
    }

    obtainEmployee() {
        const args = {CompanyName: this.state.CompanyName};
        let query = Object.keys(args)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
             .join('&');
		    let url = ENDPOINTS.OBTAIN_EMPLOYEE +'?' + query;
		    fetch(url).then(res => res.json()).then((result)=>{
		        this.setState({Employees: result})
            },
            (error)=>{});
    }

    obtainTheater() {
        const args = {CompanyName: this.state.CompanyName};
        let query = Object.keys(args)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
             .join('&');
        let url = ENDPOINTS.OBTAIN_THEATER +'?' + query;
		    fetch(url).then(res => res.json()).then((result)=>{
		        this.setState({TheaterList: result})
            },
            (error)=>{});
    }

    setTableHeader() {
        const headings = {'Name':0, 'Manager':1, 'City':2, 'State':3, 'Capacity':4};
        let header = Object.keys(headings)
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }

    renderTableData() {
        return this.state.TheaterList.map((theater, index) => {
            const {thName, thManagerUsername, thCity, thState, thCapacity} = theater;
            return (
                <tr key={index}>
                    <td>{thName}</td>
                    <td>{thManagerUsername}</td>
                    <td>{thCity}</td>
                    <td>{thState}</td>
                    <td>{thCapacity}</td>
                </tr>
            )
        });
    }

    renderEmployee() {
        return this.state.Employees.map((employee, index) =>{
            const {empFirstname, empLastname} = employee;
            return (
                <Form.Label className={"p-2"} key={index}>{empFirstname + ' ' + empLastname}</Form.Label>
            )
        })
    }

    getComName() {
        const comName = this.props.location.param1;
        this.setState({CompanyName: comName},
            ()=>{
                    this.obtainEmployee();
                    this.obtainTheater();
            });
    }

    render(){
        return(
            <div>
                <h1 className={"text-center"}>Company Detail</h1>
                <Form>
                    <Form.Row className={"p-2"}>
                        <Form.Group as={Col} controlId="movname" className={"form-inline"} md={{span:8,offset:2}}>
                            <Form.Label className={"p-4"}>Name</Form.Label>
                            <Form.Label className={"p-4"}>{this.state.CompanyName}</Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className={"p-2"}>
                        <Form.Group as={Col} controlId="employee" className={"form-inline"} md={{span:8,offset:2}}>
                            <Form.Label className={"p-4"}>Employees</Form.Label>
                            {this.renderEmployee()}
                        </Form.Group>
                    </Form.Row>
                </Form>

                <h3 className={"text-center"}>Theaters</h3>

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
            </div>
            )
        }
    }


