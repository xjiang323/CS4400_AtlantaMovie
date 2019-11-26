import React, {Component} from "react";
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ButtonGroup} from "react-bootstrap";
import { ListGroupItem, Button, ButtonToolbar } from "react-bootstrap";

export class Customer_reg extends Component {
    constructor(props){
        super(props);
        this.state={
            Fname:'',
            Lname:'',
            username:'',
            password:'',
            confirmPassword:'',
            CreditCard_Number:[]




        }

        this.First_name = this.First_name.bind(this);
        this.Last_name = this.Last_name.bind(this);
        this.UserName = this.UserName.bind(this);
        this.Psw = this.Psw.bind(this);
        this.confirmPassword = this.confirmPassword.bind(this);
        this.CreditCard = this.CreditCard.bind(this);

    };


    First_name(event) {
        this.setState({Fname: event.target.value});
    }

    Last_name(event) {
        this.setState({Lname: event.target.value});
    }

    UserName(event) {
        this.setState({username: event.target.value});
    }

    Psw(event){
        this.setSate({password:event.target.value});
    }

    confirmPassword(event){
        this.setSate({confirmPassword:event.target.value});
    }

    CreditCard(event){
        this.setSate({CreditCard_Number:event.target.value});
    }




    render(){
        return (
            <div>
                <h1 className={"text-center"}>
                    Customer Registration
                </h1>
                <Form>
                    <Form.Row className={"p-2"}>
                      <Form.Group as={Col} controlId="Fname" className={"form-inline"} md={{span:4,}}>
                          <Form.Label className={"p-4"}>First name</Form.Label>
                          <Form.Control  className={"w-50 m-2"} value={this.state.Fname} onChange={this.First_name}/>
                      </Form.Group>
                      <Form.Group as={Col} controlId="Lname" className={"form-inline"} md={{span:4,offset:2}}>
                          <Form.Label className={"p-4"}>Last name</Form.Label>
                          <Form.Control  className={"w-50 m-2"} value={this.state.Lname} onChange={this.Last_name}/>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row className={"p-2"}>
                        <Form.Group as={Col} controlId="userName" className={"form-inline"} md={{span:4,}}>
                            <Form.Label className={"p-4"}>Username</Form.Label>
                            <Form.Control className={"w-50 m-2"} value={this.state.username} onChange={this.UserName}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className={"p-2"}>
                        <Form.Group as={Col} controlId="psw" className={"form-inline"} md={{span:4,}}>
                          <Form.Label className={"p-4"}>Password</Form.Label>
                          <Form.Control placeholder="at least 8 characters" className={"w-200 m-2"} value={this.state.password} onChange={this.Psw}/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="confirmpsw" className={"form-inline"} md={{span:4,offset:2}}>
                          <Form.Label className={"p-4"}>Confirm Password</Form.Label>
                          <Form.Control placeholder="enter same password" className={"w-200 m-2"} value={this.state.confirmPassword} onChange={this.confirmPassword}/>
                      </Form.Group>
                    </Form.Row>



                    <Form.Row className={"p-2"} >
                        <Form.Group as={Col} className={"form-inline"} md={{span:2,offset:1}} >
                            <Form.Label >Credit Card #</Form.Label>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row className={"p-2"}>
                        <Form.Group as={Col} controlId="cardnumber" className={"form-inline"} md={{span:2,offset:3}}>
                            <Form.Control className={"w-200 m-2"} value={this.state.CreditCard_Number} onChange={this.CreditCard}/>
                        </Form.Group>
                        <Col md={{span:2, offset:4}} className={"text-center"}>
                            <Button variant={"secondary"} size={"lg"} className={"w-50"} onClick={this.addButton}>
                                Add
                            </Button>
                         </Col>
                    </Form.Row>



                     <Form.Row className={"p-2"}>
                         <Col  md={{span:2, offset:2}} className={"text-center"}>
                              <Link to={"/login"}>
                                  <Button variant={"primary"} size={"lg"} className={"w-150"}>
                                      Back
                                  </Button>
                              </Link>
                         </Col>

                         <Col md={{span:2, offset:3}} className={"text-center"}>
                             <Link to={""}>
                                 <Button variant={"primary"} size={"lg"} className={"w-150"}>
                                     Register
                                 </Button>
                             </Link>
                         </Col>
                     </Form.Row>
                </Form>
            </div>

        )
    }
}

