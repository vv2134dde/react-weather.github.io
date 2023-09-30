import React from 'react';
import styles from './WeatherInformation.module.scss'
import OneDay from "./OneDay/OneDay";
const WeatherInformation = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
        </ul>
    );
};

export default WeatherInformation;

