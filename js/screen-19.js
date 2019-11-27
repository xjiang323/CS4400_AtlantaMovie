import React, {Component} from "react";
import {Col, Form, Row, Container, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ENDPOINTS} from './Constants';
import DatePicker from "react-datepicker";

export class ManagerScheduleMovie extends Component{
    constructor(props) {
        super(props);
        this.state = {name:"", releasedate:"", playdate:""};

        this.changeMovieName = this.changeMovieName.bind(this);
        this.changeReleaseDate = this.changeReleaseDate.bind(this);
        this.changePlayDate = this.changePlayDate.bind(this);
        this.add = this.add.bind(this);
    }

    changeMovieName(e) {
        this.setState({name: e.target.value});
    }

    changeReleaseDate(date) {
        this.setState({releasedate: date});
    }

    changePlayDate(date) {
        this.setState({playdate: date});
    }

    add() {
        const args = {
            Name: this.state.name,
            ReleaseDate: this.state.releasedate,
            PlayDate: this.state.playdate,
        }
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');
        let url = ENDPOINTS.MANAGER_SCHEDULE_MOVIE + '?' + query;
        fetch(url).then(()=>{}, ()=>{});
    }


    render() {
        return (

            <div>
                <h1 className={"text-center"}>Schedule Movie</h1>
                <Form>

                    <Form.Row className={"p-2"}>
                        <Form.Group as={Col} controlId="MovieName" className={"form-inline"} md={{span: 4, offset: 2}}>
                            <Form.Label className={"p-4"}>Name</Form.Label>
                            <Form.Control className={"w-25 m-2"} value={this.state.name} onChange={this.changeMovieName}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="MovieName" className={"form-inline"} md={{span: 4, offset: 2}}>
                            <Col xs lg="2">Release Date</Col>
                            <Col xs lg="2">
                                <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.releasedate} onChange={this.changeReleaseDate}/>
                            </Col>
                        </Form.Group>

                    </Form.Row>

                    <Form.Row className="justify-content-md-center">
                        <Col xs lg="2">Play Date</Col>
                        <Col xs lg="2">
                            <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.playdate} onChange={this.changePlayDate}/>
                        </Col>
                    </Form.Row>

                </Form>

                <Row className={"p-2"}>
                    <Col md={{span:2, offset:3}} className={"text-center"}>
                        <Link to={"/ManagerOnlyFunction"}>
                            <Button variant={"primary"} size={"lg"} className={"w-100"}>Back</Button>
                        </Link>
                    </Col>

                    <Col md={{span:2, offset:2}} className={"text-center"}>
                        <Button variant={"primary"} onClick = {this.add} size={"lg"} className={"w-100"}>Add</Button>
                    </Col>
                </Row>
            </div>

        );
    }
}
