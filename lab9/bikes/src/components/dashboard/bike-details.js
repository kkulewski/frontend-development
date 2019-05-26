import React, {Component} from 'react';
import './bike-details.css';

export class BikeDetails extends Component {

    render() {
        return (
            <div className="BikeDetails">
                <h3>Details</h3>
                <p>{Object.keys(this.props.bike).map(k => <p>{k}: {this.props.bike[k]}</p>)}</p>
            </div>
        )
    }


}
