import { useState } from "react"
import AddFav from "../action/AddFav"


const init ={
    FavList:[],
    movies:[]
}
export default function CompineReducer(state=init,action){
    switch(action.type){
        case 'AddFav':
            return{
                ...state,
                FavList:[...state.FavList,action.payload],
            };
        case 'removeFav':
             return{
                 ...state,
                 FavList:state.FavList.slice(0,state.FavList.indexOf(action.payload)).concat(state.FavList.slice(state.FavList.indexOf(action.payload)+1))
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

//removeFav