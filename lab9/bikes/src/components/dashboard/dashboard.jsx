import React, {Component} from 'react';
import { BikeRepository } from '../../services/bike-repository-api.jsx';
import { BikeList } from './bike-list.jsx';
import { BikeDetails } from './bike-details.jsx';
import { BikeForm } from './bike-form.jsx';
import './dashboard.css';
import '../../index.css';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;

        this.bikeRepository = new BikeRepository();
        
        this.state = {
            bikes: [],
            activeBike: 0,
            info: ""
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

    handleSubmit = async (formBike) => {
        const result = await this.bikeRepository.add(formBike);
        this.setState({ info: Object.keys(result).includes("message") ? result.message : ""});
        this.fetchBikes();
    }

    handleSelectionChange = newIndex => {
        this.setState({ activeBike: newIndex })
    }

    render() {

        return (
            <div className="content-box">
                <p>{this.state.info}</p>
                <BikeForm onBikeSubmit={this.handleSubmit}/>
                <br/>
                <BikeList bikes={this.state.bikes} selectionHandler={this.handleSelectionChange}/>
                <br/>
                <BikeDetails bike={this.state.bikes[this.state.activeBike]}/>
                <br/>
            </div>
        )
    }
}
