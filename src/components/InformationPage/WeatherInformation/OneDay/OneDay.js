import React from 'react';
import styles from './OneDay.module.scss'
import Day from './../../../../img/icon/dayClear.png'
const OneDay = () => {
    return (
        <>
            <div className={styles.header}>
                <p>Пн 27.09</p>
            </div>
            <div className={styles.flex}>
                <div className={styles.image}>
                    <img src={Day} alt="day"/>
                    <p>19°</p>
                </div>
                <div className={styles.info}>
                    <h3>Ветер</h3>
                    <p>5 м/с, западный</p>
                </div>
                <div className={styles.info}>
                    <h3>Давление</h3>
                    <p>752 мм рт. ст.</p>
                </div>
            </div>
        </>
    );
};

export default OneDay;
