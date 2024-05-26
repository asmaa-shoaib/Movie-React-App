import './MovieCard.scss'
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
     const changeDateFormate=(str)=>{
      //Apr 24, 2024
      //2024-03-27
      let splitedDate=str.split('-');
      let m='';
      switch(splitedDate[1]){
        case '01':
           m='Jan'
        case '02':
           m='Feb'
        case '03':
           m='Mar'
        case '04':
           m='Apr'
        case '05':
           m='May'
        case '06':
           m='Jun'
        case '07':
           m='Jul'
        case '08':
           m='Ogu'
        case '09':
           m='Sep'
        case '10':
           m='Oct'
        case '11':
           m='Nov'
        case '12':
           m='Dec'
      }
      return  m +' '+splitedDate[2]+','+splitedDate[0]
      
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
                          <Link to={`/movielist/${props.id}`} ><img src={imgLink+movie.poster_path} class="img-fluid rounded-start" alt="..."/></Link>  
                            
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{splitTallString(movie.original_title,35)}</h5>
                              <span class="card-text small text-lightColor2">{changeDateFormate(movie.release_date)}</span>
                              <div class="rounded-circle vote-average"><div className='rounded-circle '><small class="text-white">{movie.vote_average}</small></div></div>
                              <button onClick={()=>(AddMovieToFav(props.id))} className='btn btn-primary'>Add to fav</button>
                            </div>
                          </div>
                        </div>
                    </div>}
              
        </>
    )
}