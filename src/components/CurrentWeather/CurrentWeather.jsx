import React, { Component } from "react";

export default class CurrentWeather extends Component {
    render() {
        return (
            <section>
                <article>
                    <p>{this.props.city}</p>
                    <p>{this.props.time}</p>
                    {
                        // this.props.weather
                        // ? <p>CurrentWeather</p>
                        // : <p>Unable to load</p>
                    }
                </article>
            </section>
        );
    }
}