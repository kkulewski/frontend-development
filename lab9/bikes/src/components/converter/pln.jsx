import React, { Component } from "react";
import "../../index.css";

export class PLN extends Component {

    handleChange = (e) => this.props.onPlnChange(e.target.value);

    render() {
        const cash = this.props.pln;
        return (
            <div>
                <label>PLN:</label>
                <input value={cash} onChange={this.handleChange}/>
            </div>
        );
    }

}
