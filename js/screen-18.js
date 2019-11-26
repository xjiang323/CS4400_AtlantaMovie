import React, {Component} from "react";
import {Col, Form, Row, Container, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ENDPOINTS} from './Constants';
import DatePicker from "react-datepicker";

export class ManagerTheaterOverview extends Component{
    constructor(props) {
        super(props);
        this.state = {moviename: "", minmovieduration: "", maxmovieduration: "", minmoviereleasedate: "", maxmoviereleasedate: "",
                      minmovieplaydate: "", maxmovieplaydate: "", onlynotplayedmovie: "False",
                      movieList:[{moviename:'The One', Duration:120, RelaseDate:'2019-01-01', PlayDate:'2019-02-01'}]};

        this.changeMovieName = this.changeMovieName.bind(this);
        this.changeminMovieDuration = this.changeminMovieDuration.bind(this);
        this.changemaxMovieDuration = this.changemaxMovieDuration.bind(this);
        this.changeminMovieReleaseDate = this.changeminMovieReleaseDate.bind(this);
        this.changemaxMovieReleaseDate = this.changemaxMovieReleaseDate.bind(this);
        this.changeminMoviePlayDate = this.changeminMoviePlayDate.bind(this);
        this.changemaxMoviePlayDate = this.changemaxMoviePlayDate.bind(this);
        this.changeonlyIncludedNotPlayedMovie = this.changeonlyIncludedNotPlayedMovie.bind(this);

    }
    changeMovieName(e) {
        this.setState({moviename: e.target.value});
    }

    changeminMovieDuration(e) {
        this.setState({minmovieduration: e.target.value});
    }

    changemaxMovieDuration(e) {
        this.setState({maxmovieduration: e.target.value});
    }

    changeminMovieReleaseDate(date) {
        this.setState({minmoviereleasedate: date});
    }

    changemaxMovieReleaseDate(date) {
        this.setState({maxmoviereleasedate: date});
    }

    changeminMoviePlayDate(date) {
        this.setState({minmovieplaydate: date});
    }

    changemaxMoviePlayDate(date) {
        this.setState({maxmovieplaydate: date});
    }

    changeonlyIncludedNotPlayedMovie(){
        a="1"
    }



    setTableHeader() {
        const headings = {'Movie Name':0, 'Duration':1, 'Release Date':2, 'Play Date':3};
        let header = Object.keys(headings)
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }

    renderTableData() {
        return this.state.movieList.map((movie_info, index) => {
            const {moviename, Duration, RelaseDate, PlayDate} = movie_info;
            return (
                <tr key={moviename}>
                    <td>{moviename}</td>
                    <td>{Duration}</td>
                    <td>{RelaseDate}</td>
                    <td>{PlayDate}</td>
                </tr>
            )
        });
    }

    filter() {
        const args = {
            movName: this.state.moviename,
            minMovDuration: this.state.minmovieduration,
            maxMovDuration: this.state.maxmovieduration,
            minMovReleaseDate: this.state.minmoviereleasedate,
            maxMovReleaseDate: this.state.maxmoviereleasedate,
            minMovPlayDate: this.state.minmovieplaydate,
            maxMovPlayDate: this.state.maxmovieplaydate,
            includedNotPlay: this.state.onlynotplayedmovie,
        };
    }

    render(){
        return(
            <div>
                <h1 className={"text-center"}>Theater Overview</h1>
                <Form>
                    <Form.Row className={"p-2"}>
                        <Form.Group as={Col} controlId="moviename" className={"form-inline"} md={{span:4,offset:2}}>
                            <Form.Label className={"p-4"}>Movie Name(include)</Form.Label>
                            <Form.Control className={"w-25 m-2"} value={this.state.moviename} onChange={this.changeMovieName}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="movieduration" className={"form-inline"} md={{span:4}}>
                            <Form.Label className={"p-4"}>Movie Duration</Form.Label>
                            <Form.Control className={"w-25 m-2"} value={this.state.minmovieduration} onChange={this.changeminMovieDuration}/>
                            <Form.Label>-</Form.Label>
                            <Form.Control className={"w-25 m-2"} value={this.state.maxmovieduration} onChange={this.changemaxMovieDuration}/>
                        </Form.Group>
                     </Form.Row>

                     <Form.Row className="justify-content-md-center">
                         <Col xs lg="2"  className={"p-2"}>Movie Release Date</Col>
                         <Col xs lg="2"  className={"p-2"}>
                             <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.minmoviereleasedate} onChange={this.changeminMovieReleaseDate}/>
                         </Col>
                         <Col md="auto"  className={"p-2"}>-</Col>
                         <Col xs lg="2"  className={"p-2"}>
                             <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.maxmoviereleasedate} onChange={this.changemaxMovieReleaseDate}/>
                         </Col>
                     </Form.Row>

                     <Form.Row className="justify-content-md-center">
                         <Col xs lg="2"  className={"p-2"}>Movie Play Date</Col>
                         <Col xs lg="2"  className={"p-2"}>
                             <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.minmovieplaydate} onChange={this.changeminMoviePlayDate}/>
                         </Col>
                         <Col md="auto"  className={"p-2"}>-</Col>
                         <Col xs lg="2"  className={"p-2"}>
                             <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.maxmovieplaydate} onChange={this.changemaxMoviePlayDate}/>
                         </Col>
                     </Form.Row>

                    <Form.Row className={"p-2"}>
                        <Form.Group as={Col} controlId="formBasicCheckbox" md={{span:4,offset:5}}>
                            <Form.Check type="checkbox" label="Only Include Not Played Movies" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className={"p-2"}>
                        <Form.Group as={Col} md={{span:2,offset:5}} className={"text-center"}>
                            <Button variant={"primary"} size={"lg"} className={"w-100"}>
                                Filter
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>

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
                    <Link to={"/ManagerOnlyFunction"}>
                        <Button variant={"primary"} size={"lg"} className={"w-100"}>
                            Back
                        </Button>
                    </Link>
                </Col>
            </div>
        )
    }
}