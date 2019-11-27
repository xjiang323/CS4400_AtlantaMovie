import React, {Component} from "react";
import {Col, Form, Row, Container, Table, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ENDPOINTS} from './Constants';

export class AdminCreateTheater extends Component {
	constructor(props){
		super(props);
		this.state = {Name: "", Company: "", Street_Address: "", City: "", State: "", Zipcode: "",
			            Capacity: "", Manager: "", comDropdownList:[], manDropdownList:[]};

		this.changeTheaterName = this.changeTheaterName.bind(this);
		this.changeCompany = this.changeCompany.bind(this);
		this.changeStreetAddress = this.changeStreetAddress.bind(this);
		this.changeCity = this.changeCity.bind(this);
		this.changeState = this.changeState.bind(this);
		this.changeZipcode = this.changeZipcode.bind(this);
		this.changeCapacity = this.changeCapacity.bind(this);
		this.changeManager = this.changeManager.bind(this);
		this.obtainCom = this.obtainCom.bind(this);
		this.obtainMan = this.obtainMan.bind(this);
		this.getComName = this.getComName.bind(this);
		this.create = this.create.bind(this);
	}

	componentDidMount() {
		this.getComName();
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

	obtainCom() {
    let url = ENDPOINTS.OBTAIN_COMPANY;
    fetch(url).then(res => res.json()).then((result)=>{
      this.setState({comDropdownList: result})
        },
        (error)=>{});
  }

  obtainMan() {
		const args = {Company: this.state.Company};
		let query = Object.keys(args)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
             .join('&');
		let url = ENDPOINTS.OBTAIN_MANAGER + '?' + query;
		fetch(url).then(res => res.json()).then((result)=>{
      this.setState({manDropdownList: result})
        },
        (error)=>{});
	}

	getComName() {
	    const comName = this.props.location.param1;
	    this.setState({Company: comName},
					()=>{
	        this.obtainCom();
	        this.obtainMan();
	    });
    }

	create() {
		const args = {
			Name: this.state.Name,
			Company: this.state.Company,
			Street_Address: this.state.Street_Address,
			City: this.state.City,
			Manager: this.state.Manager,
			State: this.state.State,
			Zipcode: this.state.Zipcode,
			Capacity: this.state.Capacity
		}
		let query = Object.keys(args)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(args[k]))
             .join('&');
		let url = ENDPOINTS.CREATE_THEATER + '?' + query;
		fetch(url).then(()=>{}, ()=>{});
	}

	render() {
		const companies = this.state.comDropdownList;
		const managers = this.state.manDropdownList;
		return (
				<div>
					<h1 className={"text-center"}>Create Theater</h1>
					<Form>
						<Form.Row className={"p-2"}>
							<Form.Group as={Col} controlId="TheaterName" className={"form-inline"} md={{span: 3, offset: 3}}>
								<Form.Label className={"p-2"}>Name</Form.Label>
								<Form.Control className={"w-75 m-2"} value={this.state.Name} onChange={this.changeTheaterName}/>
							</Form.Group>

							<Form.Group as={Col} controlId="companyName" className={"form-inline"} md={{span:4}}>
								<Form.Label className={"p-2"}>Company</Form.Label>
								<Form.Control as="select" className={"w-50 m-2"} value={this.state.Company} onChange={this.changeCompany}>
									{
                    companies.map((company, index) => (
                        <option value={company.comName} key={index}>{company.comName}</option>
                    ))
                  }
								</Form.Control>
							</Form.Group>
						</Form.Row>

						<Form.Row className={"p-2"}>
							<Form.Group as={Col} controlId="StreetAddress" className={"form-inline"} md={{span: 6, offset: 3}}>
								<Form.Label className={"p-2"}>Street Address</Form.Label>
								<Form.Control className={"w-75 m-2"} value={this.state.Street_Address} onChange={this.changeStreetAddress}/>
							</Form.Group>
						</Form.Row>

						<Form.Row className={"p-2"}>
							<Form.Group as={Col} controlId="City" className={"form-inline"} md={{span: 2, offset:3}}>
								<Form.Label className={"p-2"}>City</Form.Label>
								<Form.Control className={"w-50 m-2"} value={this.state.City} onChange={this.changeCity}/>
							</Form.Group>

							<Form.Group as={Col} controlId="State" className={"form-inline"} md={{span:2}}>
								<Form.Label className={"p-2"}>State</Form.Label>
								<Form.Control as="select" className={"w-50 m-2"} value={this.state.State} onChange={this.changeState}>
									<option value="AL">AL</option>
									<option value="AK">AK</option>
									<option value="AZ">AZ</option>
									<option value="AR">AR</option>
									<option value="CA">CA</option>
									<option value="CO">CO</option>
									<option value="CT">CT</option>
									<option value="DE">DE</option>
									<option value="DC">DC</option>
									<option value="FL">FL</option>
									<option value="GA">GA</option>
									<option value="HI">HI</option>
									<option value="ID">ID</option>
									<option value="IL">IL</option>
									<option value="IN">IN</option>
									<option value="IA">IA</option>
									<option value="KS">KS</option>
									<option value="KY">KY</option>
									<option value="LA">LA</option>
									<option value="ME">ME</option>
									<option value="MD">MD</option>
									<option value="MA">MA</option>
									<option value="MI">MI</option>
									<option value="MN">MN</option>
									<option value="MS">MS</option>
									<option value="MO">MO</option>
									<option value="MT">MT</option>
									<option value="NE">NE</option>
									<option value="NV">NV</option>
									<option value="NH">NH</option>
									<option value="NJ">NJ</option>
									<option value="NM">NM</option>
									<option value="NY">NY</option>
									<option value="NC">NC</option>
									<option value="ND">ND</option>
									<option value="OH">OH</option>
									<option value="OK">OK</option>
									<option value="OR">OR</option>
									<option value="PA">PA</option>
									<option value="RI">RI</option>
									<option value="SC">SC</option>
									<option value="SD">SD</option>
									<option value="TN">TN</option>
									<option value="TX">TX</option>
									<option value="UT">UT</option>
									<option value="VT">VT</option>
									<option value="VA">VA</option>
									<option value="WA">WA</option>
									<option value="WV">WV</option>
									<option value="WI">WI</option>
									<option value="WY">WY</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="Zipcode" className={"form-inline"} md={{span: 2}}>
								<Form.Label className={"p-2"}>Zipcode</Form.Label>
								<Form.Control className={"w-50 m-2"} value={this.state.Zipcode} onChange={this.changeZipcode}/>
							</Form.Group>
						</Form.Row>

						<Form.Row className={"p-2"}>
							<Form.Group as={Col} controlId="Capacity" className={"form-inline"} md={{span: 3, offset: 3}}>
								<Form.Label className={"p-2"}>Capacity</Form.Label>
								<Form.Control className={"w-50 m-2"} value={this.state.Capacity} onChange={this.changeCapacity}/>
							</Form.Group>

							<Form.Group as={Col} controlId="Manager" className={"form-inline"} md={{span:4}}>
								<Form.Label className={"p-2"}>Manager</Form.Label>
								<Form.Control as="select" className={"w-50 m-2"} value={this.state.Manager} onChange={this.changeManager}>
									{
                    managers.map((manager, index) => (
                        <option value={manager.username} key={index}>{manager.username}</option>
                    ))
                  }
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
								<Button variant={"primary"} size={"lg"} className={"w-100"} onClick={this.create}>Create</Button>
							</Col>
						</Row>

					</Form>
				</div>
		)
	}
}
