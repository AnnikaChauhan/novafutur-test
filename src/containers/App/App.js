import React, { Component } from 'react';
import './App.module.scss';
import CurrentWeather from "../../components/CurrentWeather";
import ProgressBar from "../../components/ProgressBar";

export default class App extends Component {
  state = {
    city: "London",
    appid: "2da1ee87ddb0afd195c4f6e4eee664c2",
    currentWeatherURL: "https://api.openweathermap.org/data/2.5/weather?",
    currentWeather: "",
    forecastWeatherURL: "api.openweathermap.org/data/2.5/forecast?",
    forecastWeather: ""
  }

  componentDidMount = () => {
    fetch(`${this.state.currentWeatherURL}q=${this.state.city}&appid=${this.state.appid}`)
      .then(response => response.json())
      .then(currentWeather => {
        this.setState({
          currentWeather
        })
      })
  }

  render() {
    return (
      <div className="App">
        <CurrentWeather city={this.state.city} weather={this.state.currentWeather} />
        <ProgressBar />
      </div>
    );
  }
}
