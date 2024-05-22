import AddFav from "../action/AddFav"


const init ={
    addFav:['sss']
}
const add =(str)=>{
   return init.addFav.push(str)
}

export default function CompineReducer(state=init,action){
    switch(action.type){
        case 'AddFav':
            return{
                ...state,
                addFav:add(action.payload),
            };
        default :
            return state;
    }

}