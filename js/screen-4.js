import React, {Component} from "react";
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ButtonGroup} from "react-bootstrap";
import { ListGroupItem, Button, ButtonToolbar } from "react-bootstrap";
import {ENDPOINTS} from "./Constants";

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




    filter() {
        const args = {
      Creditcardnumber: this.state.Creditcardnumber,

    };

    // ajax
    let query = Object.keys(args)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
             .join('&');

    let url = ENDPOINTS.ADD_CARD + '?' + query;
    // ajax
    fetch(url).then(res => res.json()).then((result)=>{
      this.setState({Creditcardnumber: result})
        },
        (error)=>{});
    }


    createUI() {
        return this.state.Creditcardnumber.map((el, i) =>
            <div key={i}>
                <input type="text" value={el} />
                <input type='button' value='remove' onClick={this.removeCard.bind(this, i)} />
            </div>
        )
    }


    addClick(event) {
        const args = {
            Creditcardnumber: this.CreditCard.value,
            username: this.state.username
        };
        // ajax
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');
        let url = ENDPOINTS.ADD_CARD + '?' + query;
        fetch(url).then((res) => {
            if (res.status == 200) {
                let Creditcardnumber = [...this.state.Creditcardnumber];
                Creditcardnumber.push(this.CreditCard.value)
                this.setState({ Creditcardnumber })
            }
        }, () => { });
    }


    removeCard(i, event) {
        const args = {
            Creditcardnumber: this.state.Creditcardnumber[i],
            username: this.state.username
        };

        // ajax
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');

        let url = ENDPOINTS.REMOVE_CARD + '?' + query;
        // ajax
        fetch(url).then((res) => {
            if (res.status == 200) {
                let Creditcardnumber = [...this.state.Creditcardnumber];
                Creditcardnumber.splice(i, 1);
                this.setState({ Creditcardnumber });
            }
        }, () => { });
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



                    <div>
                        <Form.Row onSubmit={this.onSubmit}>
                            <h4>Credit Card #</h4>
                        </Form.Row>
                    </div>
                    <div>
                        {this.createUI()}
                    </div>
                    <div>
                        <input type="text" defaultValue="" ref={input => this.CreditCard = input} />
                        <input type='button' value='Add' onClick={this.addClick.bind(this)} />
                    </div>



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

