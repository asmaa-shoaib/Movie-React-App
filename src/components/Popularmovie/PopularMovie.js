//import axios from "axios";
import './Populamovie.scss'
import axios from "axios";
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import AddFav from '../../store/action/AddFav';
import MovieCard from '../MovieCard/MovieCard';
import Search from './../Search/Search';
export default function PopularMovie(props){
    const [movies,setMovies] =useState([]);
    const [page,setPage] =useState(1);
    const nextPage=()=>{
      { page<44238?setPage(page+1):setPage(1)}
  }
    const prevPage=()=>{
       { page>1?setPage(page-1):setPage(1)}
    }
    const GetMovies =(pageNum) => {
      //  console.log(str)
         axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1d4c9bdf63bc5c438f2c99f7d9c2c57a&page=${pageNum}`)
          .then((res)=>{console.log(res.data);
            setMovies(res.data.results)
          })    
          .catch((err)=>{console.log(err)})
    }
    const splitTallSentences=(str)=>{
        return str=str.slice(0,30);
        //console.log(str);
    }
    useEffect(()=>{
        GetMovies(page);
    },[page])
    useEffect(()=>{
  },[])


    const Fav =useSelector(state=>state.addFav);

    const selectNumCompletedTodos = createSelector(
      (state) => state.addFav,
      (addFav) => addFav.filter((add) =>{
         console.log(add)
         return add
        }),
    )

    const numCompletedTodos = useSelector(selectNumCompletedTodos);
    const [favouritFilm,setfavouritFilm] =useState(Fav); 
    const dispatch = useDispatch();

    const AddMovieToFav=(str)=>{
      dispatch(AddFav(str));
      console.log(str);
      console.log(Fav)
      setfavouritFilm(Fav);  
      localStorage.setItem('Fav', JSON.stringify(Fav));
    }
    return(
        <>
        <section className="popular-movie-section py-5"> 
          <div className='container'>     
          <div className='search-part'>
            <Search/>
          </div>
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
                        <MovieCard id={movie.id} />
                    </div>
         )})}
            </div>
         </div>
        </section>         
        </>
    )
  }

 