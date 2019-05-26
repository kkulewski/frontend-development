import React, {Component} from 'react';
import './bike-list.css';

export class BikeList extends Component {

    render() {
        return (
            <div className="BikeList">
                <h3>List</h3>
                <ol>
                    {this.props.bikes.map(bike => <li key={bike.toString()}>{bike.make} {bike.model} {bike.price}</li>)}
                </ol>
            </div>
        )
    }


}
