import React, { Component } from "react";
import styles from "./DailyForecast.module.scss";
import CountUp from "react-countup";

export default class DailyForecast extends Component {
    convertToCelcius = (kelvin) => {
        let celsius = kelvin - 273.15;
        celsius = Number.parseFloat(celsius).toFixed(0);
        return celsius;
    }

    convertUTCToRegular = (utc) => {
        let utcDate = new Date(utc * 1000);
        let actualDate = utcDate.toGMTString();
        let day = actualDate.substring(0, 3)
        return day;
    }

    render() {
        return (
            <article key={this.props.index} className={styles.dailyForecast}>
                <div>
                    <p>{this.convertUTCToRegular(this.props.item.dt)}</p>
                    <p><CountUp end={Number(this.convertToCelcius(this.props.item.main.temp))} />°</p>
                </div>
                <div>
                    <div><img src={`http://openweathermap.org/img/wn/${this.props.item.weather[0].icon}@2x.png`} alt={this.props.item.weather[0].description}/></div>
                    <p>{this.props.item.weather[0].description}</p>
                </div>
            </article>
        );
    }
}