import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function MovieDetails(){
    const param =useParams('id');
    const [movie , setMovie] = useState();
    const imgLink="https://image.tmdb.org/t/p/w500";

    const GetMovie=(id)=>{
        console.log(param.id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1d4c9bdf63bc5c438f2c99f7d9c2c57a`)
        .then((res)=>{
           console.log(res);
           setMovie(res.data)
        })
        .catch((err)=>{
            console.log(err);
        });
    } 
    useEffect(()=>{ 
        console.log(movie)
        GetMovie(param.id);
        console.log(movie)
    },[])

    return(
    <>
    <div className="film-details">
        <div className="row">
            <div className="col-md-2">
                <img className="img-fluid" src={imgLink+movie.poster_path}/>
            </div>
            <div className="col-md-2">
               <h2>{movie.original_title}</h2>
               <p>
                <p>{movie.release_date}</p>

                <p>
                {movie.genres.map(genre=>{
                    <span>{genre.name}</span>
                })}
                </p>
                <p>{movie.runtime/60}h {movie.runtime%60}m</p>
                
               </p>
               <div>
                <div className="userScore">
                    <div className="rounded">{movie.vote_average*10}%</div>
                </div>
                <div className="reaction">
                    
                </div>
                <div className="whats-your-vibe">
                    <button >What's your Vibe?</button>
                </div>
               </div>
               <p className="tagLine"></p>
               <div className="overView">
                <p>overView</p>
                <p>{movie.overview}</p>
               </div>
               <div className="row">
                <div className="col-4">
                    <h3>name</h3>
                    <p>job</p>
                </div>
               </div>
            </div>
        </div>
    </div> 
    </>
)

}