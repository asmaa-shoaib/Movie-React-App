import { useState } from "react"
import AddFav from "../action/AddFav"


const init ={
    addFav:[],
    movies:[

    ]
}
const add =(str)=>{
   return init.addFav.push(str)
}

export default function CompineReducer(state=init,action){
    switch(action.type){
        case 'AddFav':
            return{
                ...state,
                addFav:[...state.addFav,action.payload],
            };
            case 'GetMovies':
            return{
                ...state,
                movies:action.payload,
            };
        default :
            return state;
    }

}