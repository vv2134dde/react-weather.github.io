import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "./reducers/mainPageReducer";
import thunk from "redux-thunk";
import weatherPageReducer from "./reducers/weatherPageReducer";


const reducers=combineReducers({
    mainPage: mainPageReducer,
    weatherPage: weatherPageReducer
})
const store=createStore(reducers,applyMiddleware(thunk))
export default store
