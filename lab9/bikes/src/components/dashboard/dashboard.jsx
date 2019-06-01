import React, {Component} from 'react';
import './dashboard.css';
import '../../index.css';
import { BikeRepository } from '../../services/bike-repository-api.jsx';
import { Bike } from '../../models/bike';
import { BikeList } from './bike-list.jsx';
import { BikeDetails } from './bike-details.jsx';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;

        this.bikeRepository = new BikeRepository();
        
        this.state = {
            bikes: [],
            activeBike: 0,
            bikeId: 0,
            bikeMake: '',
            bikeModel: '',
            bikePrice: 0,
        }
    }

    componentDidMount() {
        this.fetchBikes();
    }

    async fetchBikes() {
        const values = await this.bikeRepository.getAll();
        this.setState({ bikes: values })
    }

    renderBikes() {
        return this.state.bikes.map(x => x.make + " " + x.model).join(", ");
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const bike = new Bike(this.state.bikeId, this.state.bikeMake, this.state.bikeModel, this.state.bikePrice, false, ["black"])
        await this.bikeRepository.add(bike);
        this.fetchBikes();
    }

    handleSelectionChange = val => {
        this.setState({ activeBike: val })
    }

    render() {

        return (
            <div className="content-box">
                <BikeList bikes={this.state.bikes} selectionHandler={this.handleSelectionChange}/>
                <br/>
                <BikeDetails bike={this.state.bikes[this.state.activeBike]}/>
                <br/>
                <div className="BikeForm">
                    <form onSubmit={this.handleSubmit}>
                        <label>ID:</label><br/>
                        <input value={this.state.bikeId} onChange={event => this.setState({bikeId: event.target.value})} /><br/>
                        <label>Make:</label><br/>
                        <input value={this.state.bikeMake} onChange={event => this.setState({bikeMake: event.target.value})} /><br/>
                        <label>Model:</label><br/>
                        <input value={this.state.bikeModel} onChange={event => this.setState({bikeModel: event.target.value})} /><br/>
                        <label>Price:</label><br/>
                        <input value={this.state.bikePrice} onChange={event => this.setState({bikePrice: event.target.value})} /><br/>
                        <button>Submit</button>
                    </form>
                </div>
                <br/>
            </div>
        )
    }
}
