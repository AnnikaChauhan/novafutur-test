import React, { Component } from "react";
import styles from "./CurrentWeather.module.scss";

export default class CurrentWeather extends Component {
    convertToCelcius = (kelvin) => {
        let celsius = kelvin - 273.15;
        celsius = Number.parseFloat(celsius).toFixed(0);
        return celsius;
    }

    render() {
        return (
            <section className={styles.currentWeather}>
                <p>{this.props.city}</p>
                <p className={styles.time}>{this.props.time} GMT</p>
                {
                    this.props.weather
                        ? <p>{this.convertToCelcius(this.props.weather.main.temp)}°</p>
                        : <p>Unavailable</p>
                }
            </section>
        );
    }
}