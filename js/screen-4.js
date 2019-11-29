import React, {Component} from "react";
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ENDPOINTS} from "./Constants";
import Button from "react-bootstrap/Button";


export class Customer_reg extends Component {
    constructor(props){
        super(props);
        this.state={
            Fname:'',
            Lname:'',
            username:'',
            password:'',
            confirmPassword:'',
            Creditcardnumber:[],
            tmp: ''




        }

        this.First_name = this.First_name.bind(this);
        this.Last_name = this.Last_name.bind(this);
        this.UserName = this.UserName.bind(this);
        this.Psw = this.Psw.bind(this);
        this.confirmPassword = this.confirmPassword.bind(this);
        this.removeCard=this.removeCard.bind(this);
        this.changevalue=this.changevalue.bind(this);
        this.addClick=this.addClick.bind(this);
        this.renderRemoveTable=this.renderRemoveTable.bind(this);
        this.scree4Reg=this.scree4Reg.bind(this)


    };


    First_name(event) {
        this.setState({Fname: event.target.value},()=>console.log('first name',this.state.Fname));
    }

    Last_name(event) {
        this.setState({ Lname: event.target.value }, () => console.log('last name', this.state.Lname));
    }

    UserName(event) {
        this.setState({ username: event.target.value }, () => console.log('username', this.state.username));
    }

    Psw(event){
        this.setState({ password: event.target.value }, () => console.log('password', this.state.password));
    }

    confirmPassword(event){
        this.setState({ confirmPassword: event.target.value }, () => console.log('confirmPassword password', this.state.confirmPassword));
    }


    removeCard(idx){
    let someArray = this.state.Creditcardnumber;
    someArray.splice(idx, 1);
    this.setState({ Creditcardnumber: someArray }, () => {console.log('after remove', this.state.Creditcardnumber)});
    }


    renderRemoveTable(){
        return this.state.Creditcardnumber.map((card, idx) =>
            (<div  key={idx} className="container">
                <div   className="row justify-content-md-center">
                    <div className="col-md-auto">
                        {card.number}
                    </div>
                    <div className="col col-lg-2">
                        <input type='button' value='remove' onClick={() =>this.removeCard(idx)} />
                    </div>
                </div>
            </div>
                )

        )
    }



    addClick() {
    this.setState({Creditcardnumber:
            this.state.Creditcardnumber.concat([{ id:this.state.tmp, number: this.state.tmp }]),
    tmp: ''}, () => {console.log('credircard after push:', this.state.Creditcardnumber);});


  }

    changevalue(e){
        this.setState({ tmp: e.target.value });
  }








    scree4Reg(e){
        e.preventDefault();
        let creditcard_query = Object.keys(this.state.Creditcardnumber)
            .map(key => this.state.Creditcardnumber[key].number)
            .join('&');
        console.log(creditcard_query);
        console.log(this.state.Fname);
        console.log(this.state.Lname);
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.Creditcardnumber);


        const args = {
            Fname:this.state.Fname,
            Lname:this.state.Lname,
            username : this.state.username,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword,
            Creditcardnumber: creditcard_query,

        }
        let query = Object.keys(args)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
            .join('&');
        let url = ENDPOINTS.SCREEN4_REG + '?' + query;
        console.log(url)
        window.location.href = url;
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
                          <Form.Label className={"p-2"}>Confirm Password</Form.Label>
                          <Form.Control placeholder="enter same password" className={"w-200 m-2"} value={this.state.confirmPassword} onChange={this.confirmPassword}/>
                      </Form.Group>
                    </Form.Row>


                    <div className={"form-inline"}>
                        <Form.Row onSubmit={this.onSubmit} className={"p-4"} md={{span: 1, offset: 3}}>
                            <div>Credit Card #</div>
                        </Form.Row>
                    </div>
                    <div className={"text-center"}>
                        {this.renderRemoveTable()}
                    </div>


                    <div className="p-4">
                        <div className={'text-center'}>
                            <div className="row justify-content-md-center">
                                <div className="col-md-auto">
                                    <input type="text" value={this.state.tmp} onChange={this.changevalue}/>
                                </div>
                                <div className="col col-lg-2">
                                    <input type='button' value='Add' onClick={this.addClick} />
                                </div>
                            </div>
                        </div>
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
                                 <Button variant={"primary"} size={"lg"} className={"w-150"} onClick={this.scree4Reg}>
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

