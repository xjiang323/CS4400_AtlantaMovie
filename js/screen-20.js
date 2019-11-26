import React, {Component} from "react";
import {Col, Container, Row, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import {ENDPOINTS} from './Constants';

export class CustomerExploreMovie extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            movNameOptions: [],
            comNameOptions: [],
            stateOptions: [],
            cardNumOptions:[],
            movName: 'ALL',
            comName: 'ALL',
            thCity: '',
            thState: 'ALL',
            creditCardNum: '',
            moviePlayStartDate: '',
            moviePlayEndDate: '',
            movieList: [],
            select: ''
        };

        this.changemovName = this.changemovName.bind(this);
        this.changecomName = this.changecomName.bind(this);
        this.changethCity = this.changethCity.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCardNum = this.changeCardNum.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
        this.select = this.select.bind(this);
        this.addViewHistory = this.addViewHistory.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
        this.setEndDate = this.setEndDate.bind(this);
    }
    componentDidMount() {
        this.getCompany();
        this.getMovie();
        this.getState();
        this.getUserCardNum();
    }
    getMovie() {
        let url = ENDPOINTS.GET_ALL_MOVIE;
        fetch(url).then(res => res.json()).then((result)=>{
        this.setState({movNameOptions: result})},
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
    getUserCardNum() {
        let url = ENDPOINTS.GET_USER_CARD_NUMBER;
        fetch(url).then(res => res.json()).then((result)=>{
        this.setState({cardNumOptions: result})},
            (error)=>{});
    }



    changemovName(e){
        this.setState({ movName: e.target.value }, () => console.log('Movie Name', this.state.movName));
    }
    changecomName(e){
        this.setState({ comName: e.target.value }, () => console.log('Company Name', this.state.comName));
    }
    changethCity(e) {
        this.setState({ thCity: e.target.value }, () => console.log('thCity', this.state.thCity));
    }
    changeState(e){
        this.setState({ thState: e.target.value }, () => console.log('State', this.state.state));
    }

    changeCardNum(e){
        this.setState({ creditCardNum: e.target.value }, () => console.log('card Num', this.state.creditCardNum));
    }

    submitFilter(e){
        e.preventDefault();

        const args = {
            movName: this.state.movName,
            comName: this.state.comName,
            thCity: this.state.thCity,
            thState: this.state.thState,
            moviePlayStartDate: this.state.moviePlayStartDate,
            moviePlayEndDate: this.state.moviePlayEndDate
        };

        this.setState({
            movName: 'ALL',
            comName: 'ALL',
            thCity: '',
            thState: 'ALL',
            moviePlayStartDate: '',
            moviePlayEndDate: '',
        });
        //ajax
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');
        let url = ENDPOINTS.FILTER_MOVIE + '?' + query;

        fetch(url).then(res => res.json()).then((result)=> {
            this.setState({ movieList: result}, () => this.renderTableData())});

    }
    setStartDate(date){
        this.setState({ moviePlayStartDate: date }, () => console.log('Start Date', this.state.moviePlayStartDate));
    }
    setEndDate(date){
        this.setState({ moviePlayEndDate: date }, () => console.log('End Date', this.state.moviePlayEndDate));
    }

    setTableHeader() {
        const headings = {'Movie': 0, 'Theater':1, 'Address':2, 'Company':3, 'Play Date':4};
        let header = Object.keys(headings)
      return header.map((key, index) => {
          return <th key={index}>{key}</th>
      })
   }

    select(e){
        this.setState({select : e.target.value})
        // this.setState({ select: e.target.value }, () => console.log('Movie Name', this.state.select));
     }

     addViewHistory(e){
        const selectIndex = parseInt(this.state.select);
        const viewRow = this.state.movieList[selectIndex];
        const args = {
            creditCardNum: this.state.creditCardNum,
            movName: viewRow['movName'],
            comName: viewRow['comName'],
            thName: viewRow['thName'],
            movReleaseDate: viewRow['movReleaseDate'],
            movPlayDate: viewRow['movPlayDate']
        };
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');
        let url = ENDPOINTS.CUSTOMER_VIEW_MOV + '?' + query;

        fetch(url);

     }

   renderTableData() {
      return this.state.movieList.map((movie_info, index) => {
          const { movName, thName, Address, comName, movPlayDate } = movie_info;
          console.log(movie_info);
         return (
            <tr key={index}>
               <td><input type={"radio"}
                                 value={index}
                                 checked={parseInt(this.state.select) === index}
                                 onChange={this.select}/>{movName}</td>
               <td>{thName}</td>
               <td>{Address}</td>
               <td>{comName}</td>
                <td>{movPlayDate}</td>
            </tr>
         )
      })
   }

    render(){
        return (
            <Container>
                <h1 className={"text-center"}>Explore Movie</h1>
                <Row className={"p-2"}>
                    <Col>
                        <Row className={"p-2"}>
                            <Col>Movie Name</Col>
                            <Col>
                                <select
                                    name="movName"
                                    value={this.state.movName}
                                    onChange={this.changemovName}
                                    className="form-select">
                                    <option value="">--ALL--</option>
                                    {this.state.movNameOptions.map(opt => {
                                        return (<option key={opt.movName} >{opt.movName}</option>);
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
                                    name="comName"
                                    value={this.state.comName}
                                    onChange={this.changecomName}
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
                                <input type="text" className="form-control" id="moviethCity" placeholder="City" value={this.state.thCity} onChange={this.changethCity}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className={"p-2"}>
                            <Col>State</Col>
                            <Col>
                                <select
                                    name="state"
                                    value={this.state.thState}
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
                <Row className={"p-2"}>
                    <Col sm={3}>Movie Play Date</Col>
                    <Col sm={3}>
                        <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.moviePlayStartDate} onChange={this.setStartDate}/>
                    </Col>
                    <Col sm={1}>-</Col>
                    <Col sm={3}>
                        <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.moviePlayEndDate} onChange={this.setEndDate}/>
                    </Col>
                </Row>
                <Row className={"p-2"}>
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
                    <Col sm={3}>
                        <div className={"text-left"}>
                            <Link to={"/AdminOnlyFunction"}>
                                <Button variant="primary">Back</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <Col>Card Number</Col>
                            <Col>
                                <select
                                    name="card num"
                                    value={this.state.creditCardNum}
                                    onChange={this.changeCardNum}
                                    className="form-select">
                                    <option value="">choose</option>
                                    {this.state.cardNumOptions.map(opt => {
                                        return (<option key={opt.creditCardNum} >{opt.creditCardNum}</option>);
                                    })}
                                </select>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={3}>
                        <div className={"text-right"}>
                            <Button variant="primary" onClick={this.addViewHistory}>View</Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        );
    }
}

