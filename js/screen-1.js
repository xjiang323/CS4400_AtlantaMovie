import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {ENDPOINTS} from "./Constants";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };

        this.recordName = this.recordName.bind(this);
        this.recordPsw = this.recordPsw.bind(this);
        this.login = this.login.bind(this);
        this.type=this.type.bind(this);
    };



    login(e){
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.password);
        const args = {
            username : this.state.name,
            password : this.state.password
        };
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');
        let url = ENDPOINTS.LOGIN + '?' + query;
        window.location.href = url;
    }
    // setFuntionalityURL(){
    //     if(this.state.type === 'AdminCustomer'){
    //         this.state.URL = '/AdminCustomerFunction'
    //     }
    //     if (this.state.type === 'Customer') {
    //         this.state.URL = '/CustomerFunction'
    //     }
    //     if(this.state.type === 'ManagerCustomer'){
    //         this.state.URL = '/ManagerCustomerFunction'
    //     }
    //     if(this.state.type === 'Admin'){
    //         this.state.URL = '/AdminFunction'
    //     }
    //     if(this.state.type === 'Manager'){
    //         this.state.URL = '/ManagerOnlyFunction'
    //     }
    //     if(this.state.type === 'User'){
    //         this.state.URL = '/UserFunction'
    //     }
    //     console.log(this.state.URL);
    // }

    recordName(event) {
        this.setState({name: event.target.value});
        console.log(this.state.name);
  }

    recordPsw(event) {
        this.setState({password: event.target.value});
        console.log(this.state.password);

    }

    type(event){
        this.setState({type:event.target.value});
        console.log(this.state.type);

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