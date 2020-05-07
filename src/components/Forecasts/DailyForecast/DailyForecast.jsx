import React, { Component } from "react";

export default class DailyForecast extends Component {
    state = {
        imageURL: `http://openweathermap.org/img/wn/${this.props.item.weather[0].icon}.png`
    }

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
            <article key={this.props.index}>
                <div>
                    <p>{this.convertUTCToRegular(this.props.item.dt)}</p>
                    <p>{this.convertToCelcius(this.props.item.main.temp)}°</p>
                </div>
                <div>
                    <img src={this.state.imageURL} alt={this.props.item.weather[0].description}/>
                    <p><span>{this.props.item.weather[0].description}</span></p>
                </div>
            </article>
        );
    }
}