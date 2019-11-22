import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";

export class ManageCompanyFilter extends Component{
  render() {
    return (
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="companyName">
              <Form.Label>Name</Form.Label>
              <Form.Control as="select">
                <option value="all">--ALL--</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label># City Covered</Form.Label>
              <Form.Control type="number"/>
              <Form.Label>--</Form.Label>
              <Form.Control type="number"/>
            </Form.Group>
          </Form.Row>
        </Form>
    );
  }
}


