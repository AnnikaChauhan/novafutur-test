import React, { Component } from "react";
import styles from "./ProgressBar.module.scss";


export default class ProgressBar extends Component {
    // componentDidMount() {
    //     this.interval = setInterval(() => {
    //         this.setState({ timer: this.props.timer - 1 })
    //         if(this.props.timer < 55){
    //             clearInterval(this.interval);
    //         }
    //     }, 1000);
    // }

    render() {
        return (
            <>
                <p>Reloading in {this.props.timer}s</p>
                <div className={styles.animationBar}>
                    <span style={{ width: '0%' }}></span>
                </div>
            </>
        );
    }
}