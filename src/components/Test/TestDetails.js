import './TestDetails.scss'
export default function TestDetails(){
    const GetHour=(time)=>{
        let fixedTime = '';
        let hours= time / 60 ;
        hours = hours.toFixed()-1
        let min = time %60;
        fixedTime = hours +"h "+ min+"m " 
        return fixedTime;
    }

    const GetRate=(rate)=>{
        let fixedRate = '';
        fixedRate=(rate*10).toFixed();
        return fixedRate;
    }
    
    return(
        <>
        {/* <section className=" movieDetails-section">
        <div className='overlay w-100 h-100'>

            <div className="film-details container py-4 ">
                <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg"/>
                </div>
                <div className="col-md-8 text-lightColor">
                   <h2 className=''>Godzilla x Kong: The New Empire (2024)</h2>
                   <div className="d-flex">
                        <h4 className='text'>04/11/2024 (EG)</h4>
                        <h4 className='text'><span>Science Fiction</span><span> Action </span><span>Adventure</span></h4>
                        <h4 className='text'>{GetHour(115)}</h4>
                   </div>
                   <div className="d-flex justify-content-between align-items-center  w-50" >
                        <div className="userScore rounded-circle bg-darkColor d-flex justify-content-center align-items-center  text-center">
                            <span className="rate ">{GetRate(7.218)}%</span>
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
                   
                   <p className="tagLine">Rise together or fall alone.</p>
                   <div className="overView ">
                    <p className='fw-bold'>Overview</p>
                    <p  className='text'>Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.</p>
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
            </div>
        </section> */}

        </>
    )
}