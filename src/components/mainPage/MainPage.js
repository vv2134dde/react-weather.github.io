import React, {useEffect} from 'react';
import styles from './MainPage.module.scss'
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import listRussiaCity from "../../../../src/store/actions/listRussiaCity";
const MainPage = ({list,changeCity,city}) => {
    let history=useHistory()
    let dispatch=useDispatch()
    let click=()=>{
        if(city!==''){
            history.push(`/city`)
        }
    }
    useEffect(()=>{
        dispatch(listRussiaCity())
    },[])

    return (
        <div className={styles.main}>
            <label className={styles.title} htmlFor="cities">Выберите город:</label>
            <input className={styles.search} onChange={e=>changeCity(e.target.value)} value={city} type="text" list='cities'/>
            <datalist id='cities'>
                {list.map((el,i)=><option key={i} value={el}>{el}</option>)}
            </datalist>
            <div className={styles.wap}>
                <hr/>
                <button onClick={click}>ОК</button>
            </div>
            <p className={styles.p}>или</p>
            <button  className={styles.gps}>
                <svg viewBox="0 0 30 30" >
                    <path d="M9.79351 21.2859L0.000110885 19.594L18.6905 4.29481L18.0054 29.82L9.79351 21.2859Z" />
                </svg>
                Моё местоположение</button>
        </div>
    );
};

export default MainPage;
