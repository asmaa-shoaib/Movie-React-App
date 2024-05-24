import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddFav from "../../store/action/AddFav";
import { useState } from "react";

export default function MovieCard(props){

    const imgLink="https://image.tmdb.org/t/p/w500";
    
    const splitTallHeader=(str)=>{
      {str.length>=20?str=str.slice(0,15)+'..':str=str}
      return str;
  }
    // const splitTallSentences=(str)=>{
    //     return str=str.slice(0,30);
    //     //console.log(str);
    // }

    const dispatch = useDispatch();  
    const Fav =useSelector(state=>state.addFav);
    const [favouritFilm,setfavouritFilm] =useState(Fav); 
   // let x=splitTallSentences(props.movie.overview)
    const AddMovieToFav=(str)=>{
        dispatch(AddFav(str));
        console.log(str);
        console.log(Fav)
        setfavouritFilm(Fav);  
        localStorage.setItem('Fav', JSON.stringify(Fav));
      }
    return(
        <>
             <div class="card mb-3" >
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src={imgLink+props.movie.poster_path} class="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{splitTallHeader(props.movie.original_title)}</h5>
                              {/* <p class="card-text" >{x}</p> */}
                              <span class="card-text"><small class="text-body-secondary">{props.movie.vote_average}</small></span>
                              <Link to={`/movielist/${props.movie.id}`} >details</Link>
                              <Link to={`/test`}>details</Link>
                              <button onClick={()=>(AddMovieToFav(props.movie.id))} className='btn btn-primary'>Add to fav</button>
                            </div>
                          </div>
                        </div>
                    </div>
        </>
    )
}