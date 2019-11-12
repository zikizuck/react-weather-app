import React, {Component} from 'react';
// import Icons from "./icons/icons";


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
        const img= reqiure get;
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Day</th>
                        <th>description</th>
                        <th>temperature</th>
                        <th>icon</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.forecast.map((forecast, index) => {
                        return <tr>
                            <td style={{textAlign:'center'}}>{forecast.day} </td>
                            <td style={{textAlign:'center'}}>{forecast.description}</td>
                            <td style={{textAlign:'center'}}>{forecast.temperature}</td>
                            <td style={{textAlign:'center'}}>{forecast.icon} <img src="/Users/thezucks/netcraft/react-weather-app/src/Forecast1Day/icons/1.png" alt=""/></td>
                        </tr>
                    })}
                    </tbody>
                </table>




            </div>
        );
    }
}

export default Forecast1Day;