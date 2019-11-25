import React, {Component} from "react";
import {Col, Container, Row, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";

export class UserExploreTheater extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            theaterNameOptions: ['Theater 1', 'Theater 2'],
            companyNameOptions: ['Com1', 'Com2'],
            stateOptions: ['state1', 'state2'],
            theaterName: 'ALL',
            companyName: '',
            city: '',
            state: '',
            theaterList: [],
            select: '',
            visitDate: ''
        };
        this.changeTheaterName = this.changeTheaterName.bind(this);
        this.changeCompanyName = this.changeCompanyName.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeState = this.changeState.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
        this.select = this.select.bind(this);
        this.addVisitHistory = this.addVisitHistory.bind(this);
        this.setVisitDate = this.setVisitDate.bind(this);
    }
    changeTheaterName(e){
        this.setState({ theaterName: e.target.value }, () => console.log('Theater Name', this.state.theaterName));
    }
    changeCompanyName(e){
        this.setState({ companyName: e.target.value }, () => console.log('Movie Name', this.state.companyName));
    }
    changeCity(e) {
        this.setState({ city: e.target.value }, () => console.log('City', this.state.city));
    }
    changeState(e){
        this.setState({ state: e.target.value }, () => console.log('State', this.state.state));
    }
    submitFilter(e){
        e.preventDefault();

        const formPayload = {
            theaterName: this.state.theaterName,
            companyName: this.state.companyName,
            city: this.state.city,
            state: this.state.state
        };
        console.log('Send to Form:', formPayload);

        this.setState({
            theaterName: 'ALL',
            companyName: '',
            city: '',
            state: ''
        });

        this.getTheaterList(formPayload)
    }
    getTheaterList(formPayload){
        this.setState({
            theaterList: [
                { Theater: 'Theater 12345', Address:'848 Spring St NW, Atlanta, GA', Company: 'Georgia Tech'},
                { Theater: 'Theater 98365', Address:'848 Spring St NW, Atlanta, GA', Company: 'California'}
            ]
        });
    }
    setTableHeader() {
        const headings = {'Theater':0, 'Address':1, 'Company':2};
        let header = Object.keys(headings)

      return header.map((key, index) => {
          return <th key={index}>{key}</th>
      })
   }
    select(e){
        this.setState({ select: e.target.value }, () => console.log('Movie Name', this.state.select));
     }
   renderTableData() {
      return this.state.theaterList.map((theater_info, index) => {
          const { Theater, Address, Company } = theater_info
         return (
            <tr key={Theater}>
               <td><input type={"radio"}
                                 value={Theater}
                                 checked={this.state.select === Theater}
                                 onChange={this.select}/>{Theater}</td>
               <td>{Address}</td>
               <td>{Company}</td>
            </tr>
         )
      })
   }
    setVisitDate(date){
        this.setState({ visitDate: date }, () => console.log('Visit Date', this.state.visitDate));
    }
   addVisitHistory(e){
        console.log('Selected Company', this.state.select);
   }

    render(){
        return (
            <Container>
                <h1 className={"text-center"}>Explore Theater</h1>
                <Row className={"p-2"}>
                    <Col>
                        <Row className={"p-2"}>
                            <Col>Theater Name</Col>
                            <Col>
                                <select
                                    name="theaterName"
                                    value={this.state.theaterName}
                                    onChange={this.changeTheaterName}
                                    className="form-select">
                                    <option value="">--ALL--</option>
                                    {this.state.theaterNameOptions.map(opt => {
                                        return (<option key={opt} >{opt}</option>);
                                    })}
                                </select>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className={"p-2"}>
                            <Col>Company Name</Col>
                            <Col>
                                <select
                                    name="companyName"
                                    value={this.state.companyName}
                                    onChange={this.changeCompanyName}
                                    className="form-select">
                                    <option value="">choose</option>
                                    {this.state.companyNameOptions.map(opt => {
                                        return (<option key={opt} >{opt}</option>);
                                    })}
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>

               <Row className={"p-2"}>
                    <Col>
                        <Row className={"p-2"}>
                            <Col>City</Col>
                            <Col>
                                <input type="text" className="form-control" id="movieCity" placeholder="City" value={this.state.city} onChange={this.changeCity}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className={"p-2"}>
                            <Col>State</Col>
                            <Col>
                                <select
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.changeState}
                                    className="form-select">
                                    <option value="">choose</option>
                                    {this.state.stateOptions.map(opt => {
                                        return (<option key={opt} >{opt}</option>);
                                    })}
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className={"text-center"}>
                    <Button variant="primary" onClick={this.submitFilter}>Filter</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>{this.setTableHeader()}</tr>
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </Table>
                <Row>
                    <Col sm={4}>
                        <div className={"text-left"}>
                            <Link to={"/AdminOnlyFunction"}>
                                <Button variant="primary">Back</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Row>Visit Date
                                <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.visitDate} onChange={this.setVisitDate}/>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <div className={"text-right"}>
                            <Button variant="primary" onClick={this.addVisitHistory}>Log Visit</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}