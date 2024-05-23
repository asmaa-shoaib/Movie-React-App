import axios from 'axios';
import './FavouriteItem.scss'
import { useEffect, useState } from 'react';
export default function FavouriteItem(props){
    const [movie,setMovie]=useState({});

    const GetFavMovie =(id)=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1d4c9bdf63bc5c438f2c99f7d9c2c57a`)
            .then((res)=>{
                console.log(res.data); 
                setMovie(res.data);
            })
            .catch((err)=>{console.log(err);})
    }   
    useEffect(()=>{
        GetFavMovie(props.id);
    }
    ,[])

    return(

       <>
        <h1>{movie.original_title}</h1>   
        <h1>{props.name}</h1>
        </>
    );
}