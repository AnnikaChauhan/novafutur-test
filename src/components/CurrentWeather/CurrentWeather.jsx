import React, { Component } from "react";

export default class CurrentWeather extends Component {
    getTheTime = () => {
        let today = new Date();
        let time = `${today.getHours()}:${today.getMinutes()}`;
        return time;
    }

    render() {
        return (
            <section>
                <h1>Weather me this</h1>
                <article>
                    <p>{this.props.city}</p>
                    <p>{this.getTheTime()}</p>
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