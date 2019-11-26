import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };

        this.recordName = this.recordName.bind(this);
        this.recordPsw = this.recordPsw.bind(this);
    };


    recordName(event) {
        this.setState({name: event.target.value});
  }

    recordPsw(event) {
        this.setState({password: event.target.value});
    }


    render() {
        return(
            <div>
                <h1 className={"text-center"}>Atlanta Movie Login</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="userName" className={"form-inline"} md={{span:4,offset:4}}>
                            <Form.Label className={"p-4"}>Username</Form.Label>
                            <Form.Control placeholder="Enter Username" className={"w-50 m-2"} value={this.state.username} onChange={this.recordName}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row >
                        <Form.Group as={Col} controlId="password" className={"form-inline"} md={{span:4,offset:4}}>
                            <Form.Label className={"p-4"}>Password</Form.Label>
                            <Form.Control placeholder="Enter Password" className={"w-50 m-2"} value={this.state.password} onChange={this.recordPsw}/>
                        </Form.Group>
                    </Form.Row>
                </Form>

                <Row className={"p-2"}>
                    <Col  md={{ span: 4, offset: 4 }}>
                        <Button variant={"primary"} size={"lg"} className={"w-100"} onClick={this.login}>
                        Login
                        </Button>
                    </Col>
                </Row>
                <Row className={"p-2"}>
                     <Col  md={{ span: 4, offset: 4 }}>
                         <Link to={"/RegisterNavigation"}>
                             <Button variant={"primary"} size={"lg"} className={"w-100"}>
                             Register
                             </Button>
                         </Link>
                     </Col>
                </Row>

            </div>
        );
    }
}