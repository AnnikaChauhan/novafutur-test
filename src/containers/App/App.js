import React, { Component } from 'react';
import './App.module.scss';
import CurrentWeather from "../../components/CurrentWeather";
import ProgressBar from "../../components/ProgressBar";

export default class App extends Component {
  state = {
    time: "",
    number: 1,
    city: "London",
    appid: "2da1ee87ddb0afd195c4f6e4eee664c2",
    currentWeatherURL: "https://api.openweathermap.org/data/2.5/weather?",
    currentWeather: "",
    forecastWeatherURL: "api.openweathermap.org/data/2.5/forecast?",
    forecastWeather: ""
  }

  getTheTime = () => {
    let today = new Date();
    let minutes;
    if (today.getMinutes() < 10) {
      minutes = `0${today.getMinutes()}`
    } else {
      minutes = today.getMinutes();
    }
    let time = `${today.getHours()}:${minutes}:${today.getSeconds()}`;
    return time;
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ time: this.getTheTime() })
    }, 1000);
  }

  // componentDidMount = () => {
  //   fetch(`${this.state.currentWeatherURL}q=${this.state.city}&appid=${this.state.appid}`)
  //     .then(response => response.json())
  //     .then(currentWeather => {
  //       this.setState({
  //         currentWeather
  //       })
  //     })
  // }

  render() {
    return (
      <div className="App">
        <p>{this.state.number}</p>
        <CurrentWeather city={this.state.city} weather={this.state.currentWeather} time={this.state.time} />
        <ProgressBar />
      </div>
    );
  }
}
