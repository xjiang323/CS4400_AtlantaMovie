import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

/**
 * Import all page components here
 */
import {Login} from "./screen-1";
import {RegisterNavigation} from "./screen-2";
import {UserOnly_reg} from "./screen-3";
import {Customer_reg} from "./screen-4";
import {ManagerOnlyReg} from "./screen-5";
import {ManagerCustomerReg} from "./screen-6";
import {AdminOnlyFunctionality} from "./screen-7";
import {AdminCustomerFunctionality} from "./screen-8";
import {ManagerOnlyFunctionality} from "./screen-9";
import {ManagerCustomerFunctionality} from "./screen-10";
import {CustomerFunctionality} from "./screen-11";
import {UserFunctionality} from "./screen-12";
import {AdminManageUser} from "./screen-13";
import {AdminManageCompany} from "./screen-14";
import {AdminCreateTheater} from "./screen-15";
import {AdminCompanyDetail} from "./screen-16"
import {AdminCreateMovie} from "./screen-17";
import {ManagerTheaterOverview} from "./screen-18";
import {ManagerScheduleMovie} from "./screen-19";
import {CustomerExploreMovie} from "./screen-20";
import {CustomerViewHistory} from "./screen-21";
import {UserExploreTheater} from "./screen-22";
import {UserVisitHistory} from "./screen-23";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/*
                    A <Switch> looks through all its children <Route>
                    elements and renders the first one whose path
                    matches the current URL. Use a <Switch> any time
                    you have multiple routes, but you want only one
                    of them to render at a time
                    */}
                    <Switch>
                        <Route exact path="/">
                            <Login/>
                        </Route>

                        // 1-6
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/RegisterNavigation">
                            <RegisterNavigation/>
                        </Route>
                        <Route exact path="/UserOnlyReg">
                            <UserOnly_reg/>
                        </Route>
                        <Route exact path="/CustomerReg">
                            <Customer_reg/>
                        </Route>
                        <Route exact path="/ManagerReg">
                            <ManagerOnlyReg/>
                        </Route>
                        <Route exact path="/ManagerCustomerReg">
                            <ManagerCustomerReg/>
                        </Route>

                        // 7-12
                        <Route exact path="/AdminOnlyFunction">
                            <AdminOnlyFunctionality/>
                        </Route>
                        <Route exact path="/AdminCustomerFunction">
                            <AdminCustomerFunctionality/>
                        </Route>
                        <Route exact path="/ManagerOnlyFunction">
                            <ManagerOnlyFunctionality/>
                        </Route>
                        <Route exact path="/ManagerCustomerFunction">
                            <ManagerCustomerFunctionality/>
                        </Route>
                        <Route exact path="/CustomerFunction">
                            <CustomerFunctionality/>
                        </Route>
                        <Route exact path="/UserFunction">
                            <UserFunctionality/>
                        </Route>
                        <Route exact path="/manageUser">
                            <AdminManageUser/>
                        </Route>
                        <Route exact path="/manageCompany">
                            <AdminManageCompany/>
                        </Route>

                        // 15-19
                        <Route exact path="/createTheater" component={AdminCreateTheater}/>
                        <Route exact path="/companyDetail" component={AdminCompanyDetail}/>
                        <Route exact path="/createMovie">
                            <AdminCreateMovie/>
                        </Route>
                        <Route exact path="/theaterOverview">
                            <ManagerTheaterOverview/>
                        </Route>
                        <Route exact path="/scheduleMovie">
                            <ManagerScheduleMovie/>
                        </Route>

                        // 20-23
                        <Route exact path="/customerExploreMovie">
                            <CustomerExploreMovie/>
                        </Route>
                        <Route exact path="/customerViewHistory">
                            <CustomerViewHistory/>
                        </Route>
                        <Route exact path="/userExploreTheater">
                            <UserExploreTheater/>
                        </Route>
                        <Route exact path="/userVisitHistory">
                            <UserVisitHistory/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
