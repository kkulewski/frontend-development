import React, {Component} from 'react';
import './bike-list.css';

export class BikeList extends Component {

    renderBikeList()
    {
        if (this.props.bikes) {
            return this.props.bikes.map(bike => <li key={bike.id.toString()} onClick={() => this.props.selectionHandler(this.props.bikes.indexOf(bike))}><button className="list-item">{bike.make} {bike.model} {bike.price}</button></li>);
        }
    }

    render() {
        return (
            <div className="BikeList">
                <h3>List</h3>
                <ol className="button-list">
                    {this.renderBikeList()}
                </ol>
            </div>
        )
    }


}
