import { useSelector } from 'react-redux';
import './Favourite.scss'
import { useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
export default function Favourite(){
    
    const Fav =useSelector(state=>state.FavList);
    //const Fav =JSON.parse(localStorage.getItem('Fav'));

    useEffect(()=>{
      console.log(Fav);
    })
    return(
      <><div className='container '>
         {Fav&&<div className='row py-5'>
          {Fav.map((movie)=>{
            return(
               <>
                <div className='col-md-6 col-lg-4' key={movie.id}>
                  <MovieCard  id={movie} /> 
                </div>  
               </>
            )
          })}
        </div>}
      </div></>
    );
}