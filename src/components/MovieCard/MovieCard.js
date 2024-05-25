import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddFav from "../../store/action/AddFav";
import { useEffect, useState } from "react";

export default function MovieCard(props){

    const imgLink="https://image.tmdb.org/t/p/w500";
    const [movie,setMovie]= useState();

    const GetFavMovie =()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=1d4c9bdf63bc5c438f2c99f7d9c2c57a`)
            .then((res)=>{
                console.log(res.data); 
                setMovie(res.data);
            })
            .catch((err)=>{console.log(err);})
    } 

    useEffect(()=>{
      console.log(props.id);
      GetFavMovie();
      console.log(movie);
      
    },[])
    const splitTallString=(str,Stringlength)=>{
       {str.length>=Stringlength?str=str.slice(0,Stringlength)+'..':str=str}
       return str;
   }
     
    const dispatch = useDispatch();  
    const Fav =useSelector(state=>state.addFav);
    const [favouritFilm,setfavouritFilm] =useState(Fav); 

    const AddMovieToFav=(str)=>{
        dispatch(AddFav(str));
        console.log(str);
        console.log(Fav)
        setfavouritFilm(Fav);  
        localStorage.setItem('Fav', JSON.stringify(Fav));
      }
    return(
        <>
        {movie&&<div class="card mb-3" > 
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src={imgLink+movie.poster_path} class="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                               <h5 class="card-title">{splitTallString(movie.original_title,15)}</h5>
                              <p class="card-text" >{splitTallString(movie.original_title,20)}</p>
                              
                              <span class="card-text"><small class="text-body-secondary">{movie.vote_average}</small></span>
                              <Link to={`/movielist/${props.id}`} >details</Link>  
                              <Link to={`/test`}>details</Link>
                              <button onClick={()=>(AddMovieToFav(props.id))} className='btn btn-primary'>Add to fav</button>
                            </div>
                          </div>
                        </div>
                    </div>}
              
        </>
    )
}