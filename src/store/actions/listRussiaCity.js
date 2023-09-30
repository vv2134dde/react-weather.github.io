import json from './../../russia.json'
const listRussiaCity=()=>{
    let arr=[]
    Array.from(json).forEach(el=>{
        arr.push(el.city)
    })

    return{
        type: 'ADD_RUSSIA_LIST',
        arr,
    }
}
export default listRussiaCity

