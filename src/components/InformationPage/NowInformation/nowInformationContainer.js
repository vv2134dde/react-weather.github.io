import {connect} from "react-redux";
import NowInformation from "./NowInformation";

const mapStateToProps=state=>{
    return{
        nowWeather:state.weatherPage.nowInformation,
        city: state.mainPage.city
    }
}


const NowInformationContainer= connect(mapStateToProps,null)(NowInformation)
export default NowInformationContainer
