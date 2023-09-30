import React, {useEffect} from 'react';
import styles from "./NowInformation.module.scss";
import clear from "../../../img/icon/nightClear.png";
import {useDispatch} from "react-redux";
import todayWeather from "../../../store/actions/todayWeather";

const NowInformation = ({nowWeather,city}) => {
    console.log(city)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(todayWeather(city))
    },[])
    return (
        <>
        <div className={styles.weather}>
                <p className={styles.title}>{nowWeather.main}</p>
                <div className={styles.wap}>
                    <img src={clear} alt="icon"/>
                    <p className={styles.value}>{nowWeather.temp}</p>
                </div>
            </div>
        <div className={styles.information}>
            <div className={styles.container}>
                <h3>Ветер</h3>
                <p>{nowWeather.wind}</p>
            </div>
            <div className={styles.container}>
                <h3>Давление</h3>
                <p>{nowWeather.pressure}</p>
            </div>
            <div className={styles.container}>
                <h3>Влажность</h3>
                <p>{nowWeather.humidity}</p>
            </div>
            <div className={styles.container}>
                <h3>Вероятность дождя</h3>
                <p>{nowWeather.probabilityRain}</p>
            </div>
        </div>
        </>
    )
};

export default NowInformation;
