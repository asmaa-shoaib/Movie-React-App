import axios from 'axios';
import './Search.scss'
import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import GetMovies from '../../store/action/GetMovies';
export default function FavouriteItem(props){
        const [movies,setMovies] = useState([]);
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
        const GetMatchedResult=(e)=>{
            console.log(e)
            
        }
        return(
            <>
            <form className='form'>
                <input type='text' onChange={(e)=>{GetMatchedResult(e.target.value)}} />
            </form>
            </>
        );

}