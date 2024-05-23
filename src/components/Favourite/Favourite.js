import { useSelector } from 'react-redux';
import './Favourite.scss'
import FavouriteItem from '../FavouriteItem/FavouriteItem';
export default function Favourite(){
    
    const Fav =useSelector(state=>state.addFav);

    return(
        <><div className='bg-warning'>
        {Fav.map((movie)=>{
    
         return(
             <>
               <FavouriteItem id={movie} name={movie}/>
             </>
      )})}
        </div></>
    );
}