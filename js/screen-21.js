import React, {Component} from "react";
import {Container, Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export class CustomerViewHistory extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            viewHistory: [ {Movie: 'M2 8800 MV', Theater: 'Theater 98365', Company: 'California', CardNum: '3', View_date: '2018-03-06'} ]
        };

    }
    getViewHistory(){
        this.setState({
            viewHistory: [ {Movie: 'M2 8800 MV', Theater: 'Theater 98365', Company: 'California', CardNum: '3', View_date: '2018-03-06'} ]
        });

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
          const { Movie, Theater, Company, CardNum, View_date } = view_info
         return (
            <tr key={Movie}>
                <td>{Movie}</td>
                <td>{Theater}</td>
                <td>{Company}</td>
                <td>{CardNum}</td>
                <td>{View_date}</td>
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

