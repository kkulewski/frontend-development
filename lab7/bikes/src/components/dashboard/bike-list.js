import React, {Component} from 'react';

import './bike-list.css';

import { Bike } from '../../models/bike.jsx'
import { Shifter } from '../../models/shifter.jsx'

export class BikeList extends Component {

    constructor(props) {
        super(props);

        this.bikes = [
            new Bike(1, "Pinarello", "One", 500.0, false, ["red", "green"], new Shifter("Shimano", 7)),
            new Bike(2, "BMC", "X1", 2500.0, false, ["white", "black", "blue"], new Shifter("FSA", 5)),
            new Bike(3, "BMC", "X2", 2500.0, true, ["black"], new Shifter("FSA", 3))
        ];

    }

    render() {
        return (
            <div className="BikeList">
                <h3>Details</h3>
                <ul>
                    {this.bikes.map(bike => <li>{bike.make} {bike.model} {bike.price}</li>)}
                </ul>
            </div>
        )
    }


}
