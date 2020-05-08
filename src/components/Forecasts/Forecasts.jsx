import React, {Component} from "react";
import styles from "./Forecasts.module.scss";
import DailyForecast from "./DailyForecast";

export default class Forecasts extends Component {
    render(){
        return(
            <section className={styles.forecasts}>
                {
                    this.props.weather
                    ? this.props.weather.map((item, index) => {
                        return <DailyForecast item={item} key={index} />
                    })
                    : <p>Unavailable</p>
                }
            </section>
        );
    }
}