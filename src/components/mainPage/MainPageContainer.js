import {connect} from "react-redux";
import MainPage from "./MainPage";
import ChangeCity from "../../../../src/store/actions/ChangeCity";

const mapStateToProps=state=>{
    return{
        list: state.mainPage.listRussiaCity,
        city: state.mainPage.city
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        changeCity:(text)=>{
            dispatch(ChangeCity(text))
            console.log(text)
        }
    }
}

 const MainPageContainer= connect(mapStateToProps,mapDispatchToProps)(MainPage)
export default MainPageContainer
