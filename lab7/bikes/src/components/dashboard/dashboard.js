import React, {Component} from 'react';
import './dashboard.css';
import { BikeList } from './bike-list.js';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="Dashboard">
                <header>{this.title}</header>
                <BikeList/>
            </div>
        )
    }
}
