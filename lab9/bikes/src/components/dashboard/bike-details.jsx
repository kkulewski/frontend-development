import React, {Component} from 'react';
import './bike-details.css';

export class BikeDetails extends Component {


    renderBikeDetails() {
        if (this.props.bike) {
            return Object.keys(this.props.bike).map(k => <p key={k}>{k}: {this.props.bike[k].toString()}</p>);
        }
    }

    render() {
        return (
            <div className="BikeDetails">
                <h3>Details</h3>
                <div>{this.renderBikeDetails()}</div>
            </div>
        )
    }


}
