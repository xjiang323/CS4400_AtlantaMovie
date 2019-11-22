import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

/**
 * Import all page components here
 */
import Hello from "./Hello";
import {ManageCompanyFilter} from "./screen-14";

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
                        <Route exact path="/manageCompany">
                            <ManageCompanyFilter/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
