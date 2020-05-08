import React, { Component } from "react";
import styles from "./ProgressBar.module.scss";

export default class ProgressBar extends Component {
    state = {
        timer: 60,
        percent: 100
    }

    componentDidMount(){
        this.intervalTimer = setInterval(() => {
            this.setState({ 
                timer: this.state.timer - 1,
                percent: ((this.state.timer -1)/60) * 100
            })
            if(this.state.timer < 0){
                this.setState({ 
                    timer: 60,
                    percent: 100
                })
            }
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalTimer);
    }

    render() {
        return (
            <section className={styles.progressBar}>
                <p>Reloading in {this.state.timer}s</p>
                <div className={styles.animationBar}>
                    <span style={{ width: `${this.state.percent}%` }}></span>
                </div>
            </section>
        );
    }
}