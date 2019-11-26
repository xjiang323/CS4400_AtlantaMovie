import React, {Component} from "react";
import {Col, Form, Row, Container, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ENDPOINTS} from './Constants';
import DatePicker from "react-datepicker";

export class AdminCreateTheater extends Component {
	constructor(props){
		super(props);
		this.state = {Name: "", Company: "", Street_Address: "", City: "", State: "", Zipcode: "", Capacity: "", Manager: ""};

		this.changeTheaterName = this.changeTheaterName.bind(this);
		this.changeCompany = this.changeCompany.bind(this);
		this.changeStreetAddress = this.changeStreetAddress.bind(this);
		this.changeCity = this.changeCity.bind(this);
		this.changeState = this.changeState.bind(this);
		this.changeZipcode = this.changeZipcode.bind(this);
		this.changeCapacity = this.changeCapacity.bind(this);
		this.changeManager = this.changeManager.bind(this);
	}

	changeTheaterName(e) {
		this.setState({Name: e.target.value});
	}

	changeCompany(e) {
		this.setState({Company: e.target.value});
	}

	changeStreetAddress(e) {
		this.setState({Street_Address: e.target.value});
	}

	changeCity(e) {
		this.setState({City: e.target.value});
	}

	changeState(e) {
		this.setState({State: e.target.value});
	}

	changeZipcode(e) {
		this.setState({Zipcode: e.target.value});
	}

	changeCapacity(e) {
		this.setState({Capacity: e.target.value});
	}

	changeManager(e) {
		this.setState({Manager: e.target.value});
	}

	render() {
		return (
			<Container>
				<div>
					<h1 className={"text-center"}>Create Theater</h1>
					<Form>
						<Form.Row className={"p-2"}>
							<Form.Group as={Col} controlId="TheaterName" className={"form-inline"} md={{span: 4, offset: 3}}>
								<Form.Label className={"p-2"}>Name</Form.Label>
								<Form.Control className={"w-25 m-2"} value={this.state.Name} onChange={this.changeTheaterName}/>
							</Form.Group>

							<Form.Group as={Col} controlId="companyName" className={"form-inline"} md={{span:4}}>
								<Form.Label className={"p-2"}>Company</Form.Label>
								<Form.Control as="select" className={"w-25 m-2"} value={this.state.Company} onChange={this.changeCompany}>
									<option value="all">--ALL--</option>
									<option value="amc">AMC</option>
									<option value="regal">Regal</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>

						<Form.Row className={"p-2"}>
							<Form.Group as={Col} controlId="StreetAddress" className={"form-inline"} lg={{span: 12, offset: 3}}>
								<Form.Label className={"p-4"}>Street Address</Form.Label>
								<Form.Control className={"w-25 m-2"} value={this.state.Street_Address} onChange={this.changeStreetAddress}/>
							</Form.Group>
						</Form.Row>


						<Form.Row className={"p-2"}>
							<Form.Group as={Col} controlId="City" className={"form-inline"} lg={{span: 3, offset:3}}>
								<Form.Label className={"p-4"}>City</Form.Label>
								<Form.Control className={"w-25 m-2"} value={this.state.Street_Address} onChange={this.changeStreetAddress}/>
							</Form.Group>

							<Form.Group as={Col} controlId="State" className={"form-inline"} lg={{span:3}}>
								<Form.Label className={"p-4"}>State</Form.Label>
								<Form.Control as="select" className={"w-25 m-2"} value={this.state.State} onChange={this.changeState}>
									<option value="all">--ALL--</option>
									<option value="amc">GA</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="Zipcode" className={"form-inline"} lg={{span: 3}}>
								<Form.Label className={"p-4"}>Zipcode</Form.Label>
								<Form.Control className={"w-25 m-2"} value={this.state.Zipcode} onChange={this.changeZipcode}/>
							</Form.Group>
						</Form.Row>

						<Form.Row className={"p-2"}>
							<Form.Group as={Col} controlId="Capacity" className={"form-inline"} md={{span: 4, offset: 3}}>
								<Form.Label className={"p-2"}>Capacity</Form.Label>
								<Form.Control className={"w-25 m-2"} value={this.state.Capacity} onChange={this.changeCapacity}/>
							</Form.Group>

							<Form.Group as={Col} controlId="Manager" className={"form-inline"} md={{span:4}}>
								<Form.Label className={"p-2"}>Manager</Form.Label>
								<Form.Control as="select" className={"w-25 m-2"} value={this.state.Manager} onChange={this.changeManager}>
									<option value="all">--ALL--</option>
									<option value="amc">M1</option>
									<option value="regal">M2</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>

						<Row className={"p-2"}>
							<Col md={{span:2, offset:3}} className={"text-center"}>
								<Link to={"/AdminOnlyFunction"}>
									<Button variant={"primary"} size={"lg"} className={"w-100"}>Back</Button>
								</Link>
							</Col>

							<Col md={{span:2, offset:2}} className={"text-center"}>
								<Button variant={"primary"} size={"lg"} className={"w-100"}>Create</Button>
							</Col>
						</Row>

					</Form>
				</div>
			</Container>

		)
	}
}
