import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './home.css';

import { Dashboard } from '../dashboard/dashboard';
import { About } from '../about/about';

export class Home extends Component {

    render() {
        return (
            <div>
            <Router>
                <div>
                    <ul className="menu-bar">
                        <li className="menu-element"><Link to="/">Dashboard</Link></li>
                        <li className="menu-element"><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
            </div>
        );
    }

}