import React, {Component} from 'react';
import './dashboard.css';
import { BikeList } from './bike-list.js';
import { BikeDetails } from './bike-details.js';
import { BikeRepository } from '../../services/bike-repository.jsx';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;

        this.bikeRepository = new BikeRepository();
        this.state = {
            bikes: this.bikeRepository.getAll(),
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
