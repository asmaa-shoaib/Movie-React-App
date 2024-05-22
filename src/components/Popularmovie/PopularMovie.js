//import axios from "axios";
import './Populamovie.scss'
import axios from "axios";
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import AddFav from '../../store/action/AddFav';
export default function PopularMovie(){
    const [movies,setMovies] =useState([]);
    const [page,setPage] =useState(1);
    const imgLink="https://image.tmdb.org/t/p/w500";
    const GetMovies =(pageNum) => {
      //  console.log(str)
         axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1d4c9bdf63bc5c438f2c99f7d9c2c57a&page=${pageNum}`)
          .then((res)=>{console.log(res.data);
            setMovies(res.data.results)
          })    
          .catch((err)=>{console.log(err)})
    }
    const splitTallHeader=(str)=>{
      {str.length>=20?str=str.slice(0,15)+'..':str=str}
      return str;
  }
    const splitTallSentences=(str)=>{
        return str=str.slice(0,30);
        //console.log(str);
    }
    const nextPage=()=>{
        { page<44238?setPage(page+1):setPage(1)}
    }
    const prevPage=()=>{
       { page>1?setPage(page-1):setPage(1)}
    }
    useEffect(()=>{

        GetMovies(page);
    },[page])

    const Fav =useSelector(state=>state.addFav);
    const dispatch = useDispatch();
    const AddMovieToFav=(str)=>{
      dispatch(AddFav(str))
      console.log(str);
      console.log(Fav)
    }


    return (
        <>
        <section className="popular-movie-section py-5">
          <div className="container">
            
        <h1 className='text-danger'>{typeof(Fav)} ~ {Fav}</h1>
        
        <h1 className='text-lightColor'>{page}</h1>
         
         <div className="d-flex flex-row justify-content-between py-3">
         <button onClick={()=>(prevPage())} className="btn btn-primary">previous</button>
         <button onClick={()=>(nextPage())} className="btn btn-primary">next</button>
         </div>
         <div className="row">
         {movies.map((movie)=>{
         let x=splitTallSentences(movie.overview)
         console.log(x);
            return(
                <div className="col-lg-4 col-md-2 movie-container" key={movie.id}>
                    <div class="card mb-3" >
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src={imgLink+movie.poster_path} class="img-fluid rounded-start" alt="..."/>
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{splitTallHeader(movie.original_title)}</h5>
                              <p class="card-text" >{x}</p>
                              <span class="card-text"><small class="text-body-secondary">{movie.vote_average}</small></span>
                              <Link to={`/movielist/${movie.id}`} >details</Link>
                              <Link to={`/test`}>details</Link>
                              <button onClick={()=>(AddMovieToFav(movie.id))} className='btn btn-primary'>Add to fav</button>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
         )})}
         </div>
        
          </div>
        </section>
        
         
        </>
    )
}