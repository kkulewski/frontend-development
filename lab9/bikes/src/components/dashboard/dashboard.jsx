import React, {Component} from 'react';
import './dashboard.css';
import '../../index.css';
import { BikeRepository } from '../../services/bike-repository-api.jsx';
import { BikeList } from './bike-list.jsx';
import { BikeDetails } from './bike-details.jsx';
import { BikeForm } from './bike-form.jsx';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;

        this.bikeRepository = new BikeRepository();
        
        this.state = {
            bikes: [],
            activeBike: 0
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

    handleSubmit = async (bike) => {
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
                <BikeForm onBikeSubmit={this.handleSubmit}/>
                <br/>
            </div>
        )
    }
}
