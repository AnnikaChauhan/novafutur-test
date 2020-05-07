import React, {Component} from "react";

export default class Forecasts extends Component {

    convertUTCToRegular = (utc) => {
        let utcDate = new Date(utc * 1000);
        let actualDate = utcDate.toGMTString();
        let day = actualDate.substring(0,3)
        return day;
    }

    render(){
        return(
            <p>Forecasts</p>
        );
    }
}