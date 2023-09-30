const defaultState={
    listRussiaCity:[],
    ChangeCity:'',
    city:''
}

const mainPageReducer=(state=defaultState,action)=>{
    let  stateCopy={...state}
    switch (action.type){
        case 'ADD_RUSSIA_LIST':
            stateCopy.listRussiaCity=[...action.arr]
            return stateCopy
        case 'CITY':
            stateCopy.ChangeCity=action.text
            stateCopy.city=stateCopy.ChangeCity
            return stateCopy
        default:
            return state

    }
}
export default mainPageReducer
