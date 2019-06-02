import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './home.css';

import { Dashboard } from '../dashboard/dashboard';
import { About } from '../about/about';
import { Converter } from '../converter/converter';

export class Home extends Component {

    render() {
        return (
            <div>
            <Router>
                <div>
                    <ul className="menu-bar">
                        <li className="menu-element"><Link to="/">Dashboard</Link></li>
                        <li className="menu-element"><Link to="/about">About</Link></li>
                        <li className="menu-element"><Link to="/converter">Converter</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/converter" component={Converter} />
                </Switch>
            </Router>
            </div>
        );
    }

}