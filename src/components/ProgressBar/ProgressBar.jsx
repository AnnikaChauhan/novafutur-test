import React, { Component } from "react";
import styles from "./ProgressBar.module.scss";

export default class ProgressBar extends Component {
    state = {
        timer: 60
    }

    componentDidMount(){
        this.intervalTimer = setInterval(() => {
        this.setState({ timer: this.state.timer - 1 })
        if(this.state.timer < 1){
            this.setState({ timer: 60 })
        }
        }, 1000);
    }

    render() {
        return (
            <section className={styles.progressBar}>
                <p>Reloading in {this.state.timer}s</p>
                <div className={styles.animationBar}>
                    <span style={{ width: '0%' }}></span>
                </div>
            </section>
        );
    }
}