import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.nazwa = props.name;
        this.state = {
            date: new Date()
        }
    }

    tick() {
        // invalid: this.state.date = new Date();
        // valid:
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="App">
                <h1>{this.nazwa}</h1>
                <h2 className="App-logo">{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

ReactDOM.render(<Clock name='Static Clock'/>, document.getElementById("root"))
