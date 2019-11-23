import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

/**
 * Import all page components here
 */
import Hello from "./Hello";
import {AdminOnlyFunctionality} from "./screen-7";
import {AdminCustomerFunctionality} from "./screen-8";
import {ManagerOnlyFunctionality} from "./screen-9";
import {ManagerCustomerFunctionality} from "./screen-10";
import {CustomerFunctionality} from "./screen-11";
import {UserFunctionality} from "./screen-12";
import {AdminManageUser} from "./screen-13";
import {AdminManageCompany} from "./screen-14";

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
                            <Hello/>
                        </Route>
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
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
