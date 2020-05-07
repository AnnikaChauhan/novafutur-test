import React, { Component } from "react";
import styles from "./ProgressBar.module.scss";

export default class ProgressBar extends Component {
    render() {
        return (
            <section className={styles.progressBar}>
                <p>Reloading in {this.props.timer}s</p>
                <div className={styles.animationBar}>
                    <span style={{ width: '0%' }}></span>
                </div>
            </section>
        );
    }
}