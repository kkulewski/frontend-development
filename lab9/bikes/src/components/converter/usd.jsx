import React, { Component } from "react";
import "../../index.css";

export class USD extends Component {

    handleChange = (e) => this.props.onUsdChange(e.target.value);

    render() {
        const cash = this.props.usd;
        return (
            <div>
                <label>USD:</label>
                <input value={cash} onChange={this.handleChange}/>
            </div>
        );
    }

}
