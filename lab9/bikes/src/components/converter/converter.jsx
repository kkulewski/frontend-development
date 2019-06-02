import React, { Component } from "react";
import "../../index.css";
import { PLN } from "./pln";
import { USD } from "./usd";

export class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usd: 0,
            pln: 0
        }
    }

    rate = 4;

    handleUsdChange = (value) => this.setState({ usd: value, pln: value * this.rate });
    handlePlnChange = (value) => this.setState({ usd: value / this.rate, pln: value});

    render() {
        return (
            <div className="content-box">
                <USD usd={this.state.usd} onUsdChange={this.handleUsdChange} />
                <PLN pln={this.state.pln} onPlnChange={this.handlePlnChange} />
            </div>
        );
    }

}
