import React, { Component } from 'react';
import './App.module.scss';
import CurrentWeather from "../../components/CurrentWeather";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

export default class App extends Component {
  state = {
    time: "",
    city: "London",
    appid: "9b54ffa13641d002a298819da9bc60a9",
    currentWeatherURL: "https://api.openweathermap.org/data/2.5/weather?",
    currentWeather: "",
    forecastWeatherURL: "api.openweathermap.org/data/2.5/forecast?",
    forecastWeather: ""
  }

  //remove seconds once we have the timing down
  getTheTime = () => {
    let today = new Date();
    let minutes;
    if (today.getMinutes() < 10) {
      minutes = `0${today.getMinutes()}`
    } else {
      minutes = today.getMinutes();
    }
    let time = `${today.getHours()}:${minutes}`;
    return time;
  }

  fetchWeather = () => {
    fetch(`${this.state.currentWeatherURL}q=${this.state.city}&appid=${this.state.appid}`)
      .then(response => response.json())
      .then(currentWeather => {
        this.setState({
          currentWeather
        })
      })
  }

  //every minute, rerender the progress bar will be easiest I think

  componentDidMount = () => {
    this.setState({ time: this.getTheTime() });
    this.interval = setInterval(() => {
      this.setState({ time: this.getTheTime()})
    }, 60000);
  }

  render() {
    // console.log(this.state.currentWeather);
    return (
      <div className="App">
        <CurrentWeather city={this.state.city} weather={this.state.currentWeather} time={this.state.time} />
        <ProgressBar/>
      </div>
    );
  }
}
