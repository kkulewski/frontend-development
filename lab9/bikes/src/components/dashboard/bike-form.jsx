import React, { Component } from "react";
import "../../index.css";
import { Bike } from '../../models/bike';

export class BikeForm extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            bikeId: 0,
            bikeMake: '',
            bikeModel: '',
            bikePrice: 0,
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const bike = new Bike(this.state.bikeId, this.state.bikeMake, this.state.bikeModel, this.state.bikePrice, false, ["black"]);
        this.props.onBikeSubmit(bike);
    }

    render() {
        return (
            <div className="BikeForm">
                <form onSubmit={this.handleFormSubmit}>
                    <label>ID:</label><br/>
                    <input value={this.state.bikeId} onChange={event => this.setState({bikeId: event.target.value})} />
                    <br/>
                    <label>Make:</label><br/>
                    <input value={this.state.bikeMake} onChange={event => this.setState({bikeMake: event.target.value})} />
                    <br/>
                    <label>Model:</label><br/>
                    <input value={this.state.bikeModel} onChange={event => this.setState({bikeModel: event.target.value})} />
                    <br/>
                    <label>Price:</label><br/>
                    <input value={this.state.bikePrice} onChange={event => this.setState({bikePrice: event.target.value})} />
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

}