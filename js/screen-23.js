import React, {Component} from "react";
import {Col, Container, Row, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";

export class UserVisitHistory extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            companyName: '',
            visitStartDate: null,
            visitEndDate: null,
            companyNameOptions: ['Com1', 'Com2'],
            visitList: []
        };
        this.changeCompanyName = this.changeCompanyName.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
        this.setVisitStartDate = this.setVisitStartDate.bind(this);
        this.setVisitEndDate = this.setVisitEndDate.bind(this);
    }
    changeCompanyName(e){
        this.setState({ companyName: e.target.value }, () => console.log('Movie Name', this.state.companyName));
    }
    setVisitStartDate(date){
        this.setState({ visitStartDate: date }, () => console.log('Start Date', this.state.visitStartDate));
    }
    setVisitEndDate(date){
        this.setState({ visitEndDate: date }, () => console.log('End Date', this.state.visitEndDate));
    }
    submitFilter(e){
        e.preventDefault();

        const formPayload = {
            companyName: this.state.companyName,
            visitStartDate: this.state.visitStartDate,
            visitEndDate: this.state.visitEndDate
        };
        console.log('Send to Form:', formPayload);

        this.setState({
            companyName: 'ALL',
            visitStartDate: null,
            visitEndDate: null
        });

        this.getVisitList(formPayload)
    }
    getVisitList(formPayload){
        this.setState({
            visitList: [
                { Theater: 'Theater 12345', Address:'848 Spring St NW, Atlanta, GA', Company: 'Georgia Tech', Visit_date: '2017-03-06' },
                { Theater: 'Theater 98365', Address:'848 Spring St NW, Atlanta, GA', Company: 'California', Visit_date: '2018-03-06' }
            ]
        });
    }
    setTableHeader() {
        const headings = {'Theater':0, 'Address':1, 'Company':2, 'Visit Date':3};
        let header = Object.keys(headings)

      return header.map((key, index) => {
          return <th key={index}>{key}</th>
      })
   }
   renderTableData() {
      return this.state.visitList.map((visit_info, index) => {
          const { Theater, Address, Company, Visit_date } = visit_info
         return (
            <tr key={Theater}>
               <td>{Theater}</td>
               <td>{Address}</td>
               <td>{Company}</td>
                <td>{Visit_date}</td>
            </tr>
         )
      })
   }
    render(){
        return (
            <Container>
                <h1 className={"text-center"}>Visit History</h1>
                <Row className={"p-2"}>
                    <Col sm={3}>Company Name
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
                    <Col sm={2}>Visit Date</Col>
                    <Col sm={3}>
                        <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.visitStartDate} onChange={this.setVisitStartDate}/>
                    </Col>
                    <Col sm={1}>-</Col>
                    <Col sm={3}>
                        <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.visitEndDate} onChange={this.setVisitEndDate}/>
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
                <div className={"text-center"}>
                    <Link to={"/AdminOnlyFunction"}>
                        <Button variant="primary">Back</Button>
                    </Link>
                </div>
            </Container>

        );
    }
}