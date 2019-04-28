import React, {Component} from 'react';
import './dashboard.css';
import { BikeList } from './bike-list.js';
import { BikeDetails } from './bike-details.js';
import { Bike } from '../../models/bike.jsx'

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;

        this.state = {
            bikes: [
                new Bike(1, "Pinarello", "One", 500.0, false, ["red", "green"]),
                new Bike(2, "BMC", "X1", 2500.0, false, ["white", "black", "blue"]),
                new Bike(3, "BMC", "X2", 2500.0, true, ["black"])
            ],
            activeBike: 0
        }
    }

    tick() {
        this.setState({
            activeBike: (this.state.activeBike + 1) % this.state.bikes.length
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {

        return (
            <div className="Dashboard">
                <h2>{this.title}</h2>
                <BikeList bikes={this.state.bikes}/>
                <BikeDetails bike={this.state.bikes[this.state.activeBike]}/>
            </div>
        )
    }
}
