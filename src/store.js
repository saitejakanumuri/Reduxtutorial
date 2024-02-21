import {createStore} from "redux";

const initialstate ={
    balence:0,
    fullname: "saiteja",
    mobile:null,
}


function reducer(state=initialstate,action)
{
    switch(action.type){
        case "deposit" : return {...state,balence:state.balence+action.payload}
        case "withdraw" :return {...state,balence:state.balence-action.payload}
        case "nameupdate" :  return {...state,fullname:action.payload}
        case "updatemobile" : return {...state,mobile:action.payload}
        default : return state
    }
    
}

// dispatch({type:"deposit",payload:1000})
// dispatch({type:"withdraw",payload:2000})
// dispatch({type:"nameupdate",payload:"saiteja"})
// dispatch({type:"updatemobile",payload:"9912536282"})

const returnStore =createStore(reducer)

//console.log(returnStore.getState())

returnStore.dispatch({type:"deposit",payload:3000})

returnStore.dispatch({type:"withdraw",payload:2000})

returnStore.dispatch({type:"nameupdate",payload:"saiteja"})

returnStore.dispatch({type:"updatemobile",payload:"9912536282"})

// console.log(returnStore.getState())
export default returnStore;




