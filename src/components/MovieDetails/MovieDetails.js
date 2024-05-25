import './MovieDetails.scss';
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
    const GetHour=(time)=>{
        let fixedTime = '';
        let hours= time / 60 ;
        hours = hours.toFixed()
        let min = time %60;
        fixedTime = hours +"h "+ min+"m " 
        return fixedTime;
    }
    const GetRate=(rate)=>{
        let fixedRate = '';
        fixedRate=(rate*10).toFixed();
        return fixedRate;
    } 
    useEffect(()=>{ 
          //url('https://image.tmdb.org/t/p/w500/j3Z3XktmWB1VhsS8iXNcrR86PXi.jpg')
        
        console.log(movie)
        GetMovie(param.id);
        console.log(movie)

    },[])
    useEffect(()=>{
        
        const movieDetails = document.getElementById('movieDetails');
        if(movie){
            movieDetails?.style.setProperty(
                "background-image",`url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`);
                console.log(movie)
                console.log(movieDetails)
        }
    },[movie])

    return(
    <>
    <section id='movieDetails' className="movieDetails-section">
        <div className='overlay w-100 h-100'>
            {movie&&
                <div className="film-details container py-5 ">
                <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid rounded" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                </div>
                <div className="col-md-8 text-lightColor">
                   <h2 className=''>{movie.original_title}</h2>
                   <div className="d-flex">
                   
                        <h4 className='text px-2'>{movie.release_date} ({(movie.original_language).toLocaleUpperCase()})</h4>
                        <h4 className='text px-2'> {movie.genres.map((gener)=>{
                            return(
                                <span className=''> {gener.name}<span>,</span></span>
                            )
                    })}</h4>
                        <h4 className='text px-2'>{GetHour(movie.runtime)}</h4>
                   </div>
                   <div className="d-flex justify-content-between align-items-center  w-50" >
                        <div className="userScore rounded-circle bg-darkColor d-flex justify-content-center align-items-center  text-center">
                            <span className="rate ">{GetRate(movie.vote_average)}%</span>
                        </div>
                        <div className="reaction">
                            <div className="btns d-flex ">
                                <button className='bg-darkColor rounded-circle react-btn d-flex justify-content-center align-items-center '><img src="/src/assets/images/smile.svg"/></button>
                                <button className='bg-darkColor rounded-circle react-btn d-flex justify-content-center align-items-center '><img src="/src/assets/images/love.png"/></button>
                                <button className='bg-darkColor rounded-circle react-btn d-flex justify-content-center align-items-center '><img src="../assets/images/wow.svg"/></button>
                            </div>
                        </div>
                        <div className="whats-your-vibe ">
                            <button className='bg-darkColor  text-lightColor px-3 py-2 '>What's your <span>Vibe?</span></button>
                        </div>
                   </div>
                   <div className="d-flex w-50 justify-content-between  align-items-center">
                        <div className='action-btns'>
                            <button className="btn rounded-circle bg-darkColor2"><span className="glyphicons_v2 thumbnails-list white">a</span></button>
                            <button className="btn rounded-circle bg-darkColor2"><span className="glyphicons_v2 heart white false">a</span></button>
                            <button className="btn rounded-circle bg-darkColor2"><span className="glyphicons_v2 bookmark white false">a</span></button>
                        </div>    
                   </div>
                   
                   <p className="tagLine">{movie.tagline}</p>
                   <div className="overView ">
                    <p className='fw-bold'>Overview</p>
                    <p  className='text'>{movie.overview}</p>
                   </div>
                   <div className="row">
                    <div className="col-4">
                        <p className='fw-bold text'>Adam Wingard</p>
                        <p className='text'>Director, Story</p>
                    </div>
                   </div>
                </div>
                </div>
            </div>
            }
            
            </div>
        </section>
    {/* <div className="film-details">
        {movie&&<div className="row">
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
        } 
    </div>  */}
    </>
)

}