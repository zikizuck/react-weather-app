import React, {Component} from 'react';
import './Forecast1Day.css'

class Forecast1Day extends Component {
    constructor(props) {
        super(props);
        this.state= {
            forecast : []
        }

    }
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
            .then(res => res.json())
            .then(  forecast => {
                this.setState({forecast});
                console.log(forecast);


            });

    }

    render() {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (
            <div>

                    {this.state.forecast.map((forecast, index) => {
                        return <div className="Forecast">
                            <div className="Card">
                                <h2 >{weekdays[forecast.day]} </h2>
                                <p ><img src={`/icons/${forecast.icon}.png`} alt="weather"/></p>
                                <h4>{forecast.description}</h4>
                                <p >Temp: {forecast.temperature}°</p>
                            </div>
                        </div>

                    })}

            </div>
        );
    }
}

export default Forecast1Day;