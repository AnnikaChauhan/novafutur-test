import React, {Component} from "react";
import DailyForecast from "./DailyForecast";

export default class Forecasts extends Component {
    state = {
        newArray: []
    }

    pushIntoTheNewArray = () => {
        if(this.props.weather){
            let array = this.props.weather.list;
            this.state.newArray.push(array[0]);
            this.state.newArray.push(array[0 + 8]);
            this.state.newArray.push(array[0 + 8 + 8]);
            this.state.newArray.push(array[0 + 8 + 8 + 8]);
            this.state.newArray.push(array[0 + 8 + 8 + 8 + 8]);
        }
    }

    render(){
        this.pushIntoTheNewArray();
        return(
            <section>
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