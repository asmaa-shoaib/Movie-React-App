import './MovieCard.scss'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddFav from "../../store/action/AddFav";
import { useEffect, useState } from 'react';
import RemoveFav from '../../store/action/RemoveFav';
import  regularHeart from '../../assets/images/heart-regular.svg'
import  solidHeart from '../../assets/images/heart-solid.svg'


export default function MovieCard(props){
    const imgLink="https://image.tmdb.org/t/p/w500";
    const [movie,setMovie]= useState();
    const [isFavourite,setIsFavourite]=useState(false);
    const GetFavMovie =()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=1d4c9bdf63bc5c438f2c99f7d9c2c57a`)
            .then((res)=>{
                console.log(res.data); 
                setMovie(res.data);
            })
            .catch((err)=>{console.log(err);})
    } 
    
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
    const Fav =useSelector(state=>state.FavList);
    const [favouritFilm,setfavouritFilm] =useState(Fav); 
    const AddMovieToFav=(str)=>{
         dispatch(AddFav(str));
         console.log(str);
         console.log(Fav)
         setfavouritFilm(Fav); 
         setIsFavourite(true); 
         console.log(favouritFilm)
         console.log(Fav)
         console.log(isFavourite)
      }
      const removefav=(str)=>{
         dispatch(RemoveFav(str));
         console.log(str);
         console.log(Fav)
         setfavouritFilm(Fav); 
         setIsFavourite(false); 

         console.log(favouritFilm)
         console.log(Fav)
         console.log(isFavourite)
      }
     useEffect(()=>{
      console.log(props.id);
      GetFavMovie();
    },[]) 
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
                             <div className='btns' >
                              {isFavourite
                              ?<button  onClick={()=>(removefav(props.id))} className='btn ' ><img src={solidHeart}/></button> 
                              : <button onClick={()=>(AddMovieToFav(props.id))} className='btn ' ><img src={regularHeart}/></button>
                              }</div>
                              </div>
                          </div>
                        </div>
                    </div>}
              
        </>
    )
}