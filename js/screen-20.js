import React, {Component} from "react";
import {Col, Container, Row, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";

export class CustomerExploreMovie extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            movieNameOptions: ['M1','M2'],
            companyNameOptions: ['Com1','Com2'],
            stateOptions: ['state1','state2'],
            cardNumOptions:['1000', '9999'],
            movieName: 'ALL',
            companyName: '',
            city: '',
            state: '',
            cardNum: '',
            moviePlayStartDate: '',
            moviePlayEndDate: '',
            movieList: [],
            select: '',
            selectMovie: '',
            selectTheater: '',
            selectCompany: '',
            selectDate: ''
        };

        this.changeMovieName = this.changeMovieName.bind(this);
        this.changeCompanyName = this.changeCompanyName.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCardNum = this.changeCardNum.bind(this);
        this.submitFilter = this.submitFilter.bind(this);
        this.getMovieList = this.getMovieList.bind(this);
        this.select = this.select.bind(this);
        this.selectTheater = this.selectTheater.bind(this);
        this.selectCompany = this.selectCompany.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.addViewHistory = this.addViewHistory.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
        this.setEndDate = this.setEndDate.bind(this);
    }

    changeMovieName(e){
        this.setState({ movieName: e.target.value }, () => console.log('Movie Name', this.state.movieName));
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

    changeCardNum(e){
        this.setState({ cardNum: e.target.value }, () => console.log('card Num', this.state.cardNum));
    }

    submitFilter(e){
        e.preventDefault();

        const formPayload = {
            movieName: this.state.movieName,
            companyName: this.state.companyName,
            city: this.state.city,
            state: this.state.state,
            moviePlayStartDate: this.state.moviePlayStartDate,
            moviePlayEndDate: this.state.moviePlayEndDate,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };
        console.log('Send to Form:', formPayload);

        this.setState({
            movieName: 'ALL',
            companyName: '',
            city: '',
            state: '',
            moviePlayStartDate: null,
            moviePlayEndDate: null,
        });

        this.getMovieList(formPayload)
    }
    getMovieList(formPayload){
        this.setState({
            movieList: [
                { Movie: 'M1 4400 MV', Theater: 'Theater 12345', Address:'848 Spring St NW, Atlanta, GA', Company: 'Georgia Tech', Play_date: '2017-03-06' },
                { Movie: 'M2 8800 MV', Theater: 'Theater 98365', Address:'848 Spring St NW, Atlanta, GA', Company: 'California', Play_date: '2018-03-06' }
            ]
        });
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
     selectTheater(e){
        this.setState({ select: e.target.value }, () => console.log('Selected Theater', this.state.selectTheater));
     }
     selectCompany(e){
        this.setState({ select: e.target.value }, () => console.log('Selected Company', this.state.selectCompany));
     }
     selectDate(e){
        this.setState({ select: e.target.value }, () => console.log('Selected date', this.state.selectDate));
     }

     addViewHistory(e){
        console.log('Selected Company', this.state.select);
     }

   renderTableData() {
      return this.state.movieList.map((movie_info, index) => {
          const { Movie, Theater, Address, Company, Play_date } = movie_info
          console.log(movie_info)
         return (
            <tr key={Movie}>
               <td><input type={"radio"}
                                 value={Movie}
                                 checked={this.state.select === Movie}
                                 onChange={this.select}/>{Movie}</td>
               <td>{Theater}</td>
               <td>{Address}</td>
               <td>{Company}</td><td>{Play_date}</td>
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
                                    name="movieName"
                                    value={this.state.movieName}
                                    onChange={this.changeMovieName}
                                    className="form-select">
                                    <option value="">--ALL--</option>
                                    {this.state.movieNameOptions.map(opt => {
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
                                    value={this.state.cardNum}
                                    onChange={this.changeCardNum}
                                    className="form-select">
                                    <option value="">choose</option>
                                    {this.state.cardNumOptions.map(opt => {
                                        return (<option key={opt} >{opt}</option>);
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

