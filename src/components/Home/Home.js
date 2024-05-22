import {  useSelector } from "react-redux"
//import AddFav from "../../store/action/AddFav";
//import { useDispatch } from "react-redux"

export default function Home(){
    const Fav =useSelector(state=>state.addFav);
    // const dispatch = useDispatch();
    // const AddMovieToFav=(str)=>{
    //     dispatch(AddFav(str))
    // }
    return (
        <>
        <h1>{Fav}</h1>
            <h1>home</h1>
        </>
    )
}