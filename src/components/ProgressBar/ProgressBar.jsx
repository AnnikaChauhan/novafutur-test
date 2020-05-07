import React, { Component } from "react";
import styles from "./ProgressBar.module.scss";


export default class ProgressBar extends Component {
    state = {
        timer: 60
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
            <p>Reloading in {this.state.timer}s</p>
            <div className={styles.animationBar}>
                <span style={{ width: '0%' }}></span>
            </div>
            </>
        );
    }
}