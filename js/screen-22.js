import React, {Component} from "react";
import {Col, Container, Row, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import {ENDPOINTS} from './Constants';

export class UserExploreTheater extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            thNameOptions: [],
            comNameOptions: [],
            stateOptions: [],
            thName: 'ALL',
            comName: 'ALL',
            thCity: '',
            thState: 'ALL',
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
    componentDidMount() {
        this.getTheater();
        this.getCompany();
        this.getState();
    }
    getTheater() {
        let url = ENDPOINTS.GET_ALL_THEATER;
        fetch(url).then(res => res.json()).then((result)=>{
        this.setState({thNameOptions: result})},
            (error)=>{});
    }
    getCompany() {
        let url = ENDPOINTS.OBTAIN_COMPANY;
        fetch(url).then(res => res.json()).then((result)=>{
        this.setState({comNameOptions: result})},
            (error)=>{});
    }
    getState() {
        let url = ENDPOINTS.GET_ALL_THEATER_STATE;
        fetch(url).then(res => res.json()).then((result)=>{
        this.setState({stateOptions: result})},
            (error)=>{});
    }

    changeTheaterName(e){
        this.setState({ thName: e.target.value }, () => console.log('Theater Name', this.state.thName));
    }
    changeCompanyName(e){
        this.setState({ comName: e.target.value }, () => console.log('Movie Name', this.state.comName));
    }
    changeCity(e) {
        this.setState({ thCity: e.target.value }, () => console.log('City', this.state.thCity));
    }
    changeState(e){
        this.setState({ thState: e.target.value }, () => console.log('State', this.state.thState));
    }
    submitFilter(e){
        e.preventDefault();

        const args = {
            thName: this.state.thName,
            comName: this.state.comName,
            thCity: this.state.thCity,
            thState: this.state.thState
        };
        console.log('Send to Form:', args);

        this.setState({
            thName: 'ALL',
            comName: 'ALL',
            thCity: '',
            thState: 'ALL'
        });
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');
        let url = ENDPOINTS.USER_FILTER_THEATER + '?' + query;

        fetch(url).then(res => res.json()).then((result)=> {
            this.setState({ theaterList: result}, () => this.renderTableData())});

    }

    setTableHeader() {
        const headings = {'Theater':0, 'Address':1, 'Company':2};
        let header = Object.keys(headings)

      return header.map((key, index) => {
          return <th key={index}>{key}</th>
      })
   }
    select(e){
        this.setState({ select: e.target.value }, () => console.log('Movie index', this.state.select));
     }
   renderTableData() {
      return this.state.theaterList.map((theater_info, index) => {
          const { thName, Address, comName } = theater_info
         return (
            <tr key={index}>
               <td><input type={"radio"}
                                 value={index}
                                 checked={parseInt(this.state.select) === index}
                                 onChange={this.select}/>{thName}</td>
               <td>{Address}</td>
               <td>{comName}</td>
            </tr>
         )
      })
   }
    setVisitDate(date){
        this.setState({ visitDate: date }, () => console.log('Visit Date', this.state.visitDate));
    }
   addVisitHistory(e){
        const selectIndex = parseInt(this.state.select);
        const viewRow = this.state.theaterList[selectIndex];
        const args = {
            thName: viewRow['thName'],
            comName: viewRow['comName'],
            visitDate: this.state.visitDate
        };
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');
        let url = ENDPOINTS.USER_VISIT_THEATER + '?' + query;

        fetch(url);
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
                                    value={this.state.thName}
                                    onChange={this.changeTheaterName}
                                    className="form-select">
                                    <option value="">--ALL--</option>
                                    {this.state.thNameOptions.map(opt => {
                                        return (<option key={opt.thName} >{opt.thName}</option>);
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
                                    value={this.state.comName}
                                    onChange={this.changeCompanyName}
                                    className="form-select">
                                    <option value="">--ALL--</option>
                                    {this.state.comNameOptions.map(opt => {
                                        return (<option key={opt.comName} >{opt.comName}</option>);
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
                                    <option value="">--ALL--</option>
                                    {this.state.stateOptions.map(opt => {
                                        return (<option key={opt.thState} >{opt.thState}</option>);
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