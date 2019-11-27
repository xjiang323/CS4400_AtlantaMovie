import React, {Component} from "react";
import {Col, Form, Row, Container, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ENDPOINTS} from './Constants';
import DatePicker from "react-datepicker";

export class AdminCreateMovie extends Component{
    constructor(props) {
        super(props);
        this.state = {name:"", duration:"", releasedate:""};

     this.changeMovieName = this.changeMovieName.bind(this);
     this.changeDuration = this.changeDuration.bind(this);
     this.changeReleaseDate = this.changeReleaseDate.bind(this);
     this.create = this.create.bind(this);
    }

    changeMovieName(e) {
        this.setState({name: e.target.value});
    }

    changeDuration(e) {
        this.setState({duration: e.target.value});
    }

    changeReleaseDate(date) {
        this.setState({releasedate: date});
    }

    create() {
        const args = {
            Name: this.state.name,
            Duration: this.state.duration,
            ReleaseDate: this.state.releasedate,
        }
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');
        let url = ENDPOINTS.ADMIN_CREATE_MOVIE + '?' + query;
        fetch(url).then(()=>{}, ()=>{});
    }


   render() {
        return (
            <Container>
                <div>
                    <h1 className={"text-center"}>Create Movie</h1>
                    <Form>

                        <Form.Row className={"p-2"}>
                            <Form.Group as={Col} controlId="MovieName" className={"form-inline"} md={{span: 4, offset: 2}}>
                                <Form.Label className={"p-4"}>Name</Form.Label>
                                <Form.Control className={"w-25 m-2"} value={this.state.name} onChange={this.changeMovieName}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="MovieName" className={"form-inline"} md={{span: 4, offset: 2}}>
                                <Form.Label className={"p-4"}>Duration</Form.Label>
                                <Form.Control className={"w-25 m-2"} value={this.state.duration} onChange={this.changeDuration}/>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row className="justify-content-md-center">
                            <Col xs lg="2">Release Date</Col>
                            <Col xs lg="2">
                                <DatePicker dateFormat="yyyy-MM-dd" selected={this.state.releasedate} onChange={this.changeReleaseDate}/>
                            </Col>
                        </Form.Row>

                    </Form>

                    <Row className={"p-2"}>
                        <Col md={{span:3, offset:2}} className={"text-center"}>
                            <Link to={"/AdminOnlyFunction"}>
                                <Button variant={"primary"} size={"lg"} className={"w-100"}>Back</Button>
                            </Link>
                        </Col>

                        <Col md={{span:3, offset:2}} className={"text-center"}>
                            <Button variant={"primary"} onClick = {this.create} size={"lg"} className={"w-100"}>Create</Button>
                        </Col>
                    </Row>
                </div>
            </Container>


        );
    }
}
