import React from 'react';
import './App.css';
import Forecast1Day from "./Forecast1Day/Forecast1Day";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                Your code here
                <Forecast1Day />
            </div>
        );
    }

}

export default App;
