import { useSelector } from 'react-redux';
import './Favourite.scss'
import FavouriteItem from '../FavouriteItem/FavouriteItem';
import { useEffect } from 'react';
export default function Favourite(){
    
    //const Fav =useSelector(state=>state.addFav);
    const Fav =JSON.parse(localStorage.getItem('Fav'));

    useEffect(()=>{
      console.log(Fav);
    })
    return(
        <><div className='bg-warning'>
        {Fav.map((movie)=>{
    
         return(
             <>
             <div className='row'>
              <div className='col-md-6 col-lg-3'>
                <FavouriteItem id={movie.id} movie={movie}/>
              </div>
             </div>
               
             </>
      )})}

        </div></>
    );
}