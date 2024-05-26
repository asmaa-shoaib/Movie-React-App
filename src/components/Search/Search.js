import axios from 'axios';
import './Search.scss'
import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import GetMovies from '../../store/action/GetMovies';
import { Link } from 'react-router-dom';
export default function FavouriteItem(props){
        const [movies,setMovies] = useState([]);
        const [moviesSearchResult,setMoviesSearchResul] = useState([]);
        const Dispatch = useDispatch();
        const GetFilm=()=>{
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1d4c9bdf63bc5c438f2c99f7d9c2c57a')   
            .then((res)=>{console.log(res.data);
                setMovies(res.data.results);
              })    
             .catch((err)=>{console.log(err)})
        }
        useEffect(()=>{
            GetFilm();
        },[])
        useEffect(()=>{;
            console.log(film);
            Dispatch(GetMovies(movies))
        },[movies])
        
        const film=useSelector(state=>state.movies);
        const result =document.getElementById('result');

        let movieList=[];
        const GetMatchedResult=(e)=>{
            
            movies.map((movie)=>{
               
                if(movie.title.toLowerCase().includes(e.toLowerCase())){
                  movieList.push(movie)
                  result.style.display='block';
                  if(e.length==0){
                    result.style.display='none';
                  }
                }else{
                    result.style.padding='0px'
                }
            }
            
        )
            setMoviesSearchResul(movieList);
            console.log(movieList)
            console.log(moviesSearchResult)
            
        }
        const hide=()=>{
            result.style.display='none'
        }
        return(
            <>
            <div className='search-form'>
                <form className='form'>
                    <input type='text' className='form-control' onChange={(e)=>{GetMatchedResult(e.target.value)}} />
                </form>
                {moviesSearchResult&&
                <div className='result rounded' id='result'>
                    {moviesSearchResult.map((movie)=>{
                        return (
                            <div className='px-2 seach-result-item-container' key={movie.id}>
                                <Link className='seach-result-item pb-1' onClick={(e=>{hide()})}  to={`/movielist/${movie.id}`}>{movie.title}</Link>
                            </div>)
                    })}
                    
                </div>}
            </div>
            
           
            
            </>
        );

}