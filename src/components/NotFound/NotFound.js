import { Link } from 'react-router-dom'
import './NotFound.scss'

export default function NotFound(){
    return (
        <>
        <div className='mainWraper'>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="main">  
            <h1>404</h1>
            <p>It looks like you're lost...<br/>That's a trouble?</p>
            <Link className='Home-btn' to={'/'} type="button">Go home</Link>
          </div>
        </div>
        
        </>
    )
}