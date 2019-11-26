import React, {Component} from "react";
import {Container, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ENDPOINTS} from './Constants';

export class CustomerViewHistory extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            viewHistory: []
        };

    }
    componentDidMount() {
        this.getViewHistory()
    }

    getViewHistory(){
        let url = ENDPOINTS.GET_CUSTOMER_VIEW_HISTORY;
        fetch(url).then(res => res.json()).then((result)=> {
            this.setState({ viewHistory: result}, () => this.renderTableData())});

    }
    setTableHeader() {
        const headings = {'Movie': 0, 'Theater':1, 'Company':2, 'CardNum':3, 'View Date':4};
        let header = Object.keys(headings)
      return header.map((key, index) => {

          return <th key={index}>{key}</th>
      })
   }
   renderTableData() {
      return this.state.viewHistory.map((view_info, index) => {
          const { movName, thName, comName, creditCardNum, movPlayDate } = view_info
          return (
            <tr key={index}>
                <td>{movName}</td>
                <td>{thName}</td>
                <td>{comName}</td>
                <td>{creditCardNum}</td>
                <td>{movPlayDate}</td>
            </tr>
         )
      })
   }
    render(){
        return (
            <Container>
                <div>
                    <h1 className={"text-center"}>View History</h1>
                </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>{this.setTableHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
                <div className={"text-center"}>
                <Link to={"/AdminOnlyFunction"}>
                    <Button variant="primary">Back</Button>
                </Link>
                </div>
            </Container>
        )
    }

}

