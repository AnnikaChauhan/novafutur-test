import React, { Component } from 'react';
import styles from './App.module.scss';
import CurrentWeather from "../../components/CurrentWeather";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Forecasts from '../../components/Forecasts/Forecasts';

export default class App extends Component {
  interval;

  state = {
    time: "",
    city: "London",
    appid: "9b54ffa13641d002a298819da9bc60a9",
    currentWeatherURL: "https://api.openweathermap.org/data/2.5/weather?",
    currentWeather: "",
    forecastWeatherURL: "https://api.openweathermap.org/data/2.5/forecast?",
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
    let time = `${today.getHours()}:${minutes}`;
    return time;
  }

  componentDidMount = () => {
    this.fetchWeather();
    this.setState({ time: this.getTheTime() });
  }

  componentWillUnmount = () => {
    clearTimeout(this.interval);
  }

  fetchWeather = () => {
    let currentWeatherURL = `${this.state.currentWeatherURL}q=${this.state.city}&appid=${this.state.appid}`;
    let forecastWeatherURL = `${this.state.forecastWeatherURL}q=${this.state.city}&appid=${this.state.appid}`;
    Promise.all([fetch(currentWeatherURL), fetch(forecastWeatherURL)])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()])
      })
      .then(([res1, res2]) => {
        this.setState({
          currentWeather: res1,
          forecastWeather: res2
        })
        this.interval = setTimeout(this.fetchWeather.bind(this), 60000);
      })
      .catch(error => console.log(error));
  }

  render() {
    // console.log(this.state.forecastWeather);
    return (
      <div className={styles.appDarkMode}>
        <CurrentWeather city={this.state.city} weather={this.state.currentWeather} time={this.state.time} />
        <ProgressBar />
        <Forecasts weather={this.state.forecastWeather} />
        <p className={styles.signature}>By Annika Chauhan for Novafutur</p>
      </div>
    );
  }
}
