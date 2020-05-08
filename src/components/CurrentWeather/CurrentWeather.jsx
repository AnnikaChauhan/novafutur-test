import React, { Component } from "react";
import styles from "./CurrentWeather.module.scss";
import CountUp from "react-countup";

export default class CurrentWeather extends Component {
    convertToCelcius = (kelvin) => {
        let celsius = kelvin - 273.15;
        celsius = Number.parseFloat(celsius).toFixed(0);
        return celsius;
    }

    render() {
        return (
            <section className={styles.currentWeather}>
                <div>
                    <p>{this.props.city}</p>
                </div>
                <div>
                    <p className={styles.time}>{this.props.time}</p>
                </div>
                {
                    this.props.weather
                        ? <div><p><CountUp end={Number(this.convertToCelcius(this.props.weather.main.temp))} />°</p></div>
                        : <div><p>Unavailable</p></div>
                }
            </section>
        );
    }
}