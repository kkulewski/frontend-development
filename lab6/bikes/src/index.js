import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

function Message() {
    return (
    <div className="App-moveX">
        <div className="App-moveY">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </div>
  );
}

ReactDOM.render(<Message/>, document.getElementById("root"));
