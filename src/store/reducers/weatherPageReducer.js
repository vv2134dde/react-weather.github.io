const defaultState={
    nowInformation:{
        nameCity:'',
        temp:'',
        wind:'',
        main:'',
        humidity:'',
        pressure:'',
        probabilityRain:'',

    }
}
const weatherPageReducer=(state=defaultState,action)=>{
    let stateCopy={...state}
    switch (action.type){
        case 'NOW_WEATHER':
            stateCopy.nowInformation={...action.nowInformation}
            return stateCopy
        default:
            return state
    }
}
export default weatherPageReducer
