import React, {Component} from "react";
import styles from "./Forecasts.module.scss";
import DailyForecast from "./DailyForecast";

export default class Forecasts extends Component {
    state = {
        newArray: []
    }

    pushIntoTheNewArray = () => {
        if(this.props.weather){
            let array = this.props.weather.list;
            this.state.newArray.push(array[0]);
            this.state.newArray.push(array[8]);
            this.state.newArray.push(array[16]);
            this.state.newArray.push(array[24]);
            this.state.newArray.push(array[32]);
        }
    }

    render(){
        this.pushIntoTheNewArray();
        return(
            <section className={styles.forecasts}>
                {
                    this.props.weather
                    ? this.state.newArray.map((item, index) => {
                        return <DailyForecast item={item} key={index} />
                    })
                    : <p>Unavailable</p>
                }
            </section>
        );
    }
}