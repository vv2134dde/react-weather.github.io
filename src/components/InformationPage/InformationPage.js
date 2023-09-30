import React, {useState} from 'react';
import Navigation from "../Layouts/Navigation/Navigation";
import WeatherInformation from "./WeatherInformation/WeatherInformation";
import NowInformationContainer from "./NowInformation/nowInformationContainer";
import {useSelector} from "react-redux";

const InformationPage = () => {
    let [value,setValue]=useState(true)
    let name=useSelector(state=>state.mainPage.city)
    let click=()=>{
        setValue(prev=>!prev)
    }
    return (
        <Navigation city={name} click={click} value={value}>
            {
                value === true ? <NowInformationContainer/> : <WeatherInformation/>
            }

        </Navigation>
    );
};

export default InformationPage;
