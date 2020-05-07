import React, { Component } from "react";

export default class CurrentWeather extends Component {
    state = {
        time: ""
    }

    componentDidMount = () => {
        let today = new Date();
        let minutes;
        if(today.getMinutes() < 10){
            minutes = `0${today.getMinutes()}`
        } else {
            minutes = today.getMinutes();
        }
        let time = `${today.getHours()}:${minutes}`;
        this.setState({ time })
    }

    render() {
        return (
            <section>
                <h1>Weather me this</h1>
                <article>
                    <p>{this.props.city}</p>
                    <p>{this.state.time}</p>
                    {
                        this.props.weather
                        ? <p>CurrentWeather</p>
                        : <p>Unable to load</p>
                    }
                </article>
            </section>
        );
    }
}