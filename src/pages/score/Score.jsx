import './score.css'
import { Link, useLocation, } from "react-router-dom";


export default function Score(props){
    const location= useLocation()
    return (
        <div className='score'>
            <div className='board2'>
            <h1>Your Score:</h1>
            <div className='headers'>
                <h2>{"Mode:" + location.state.mode}</h2>
                <h2>{"Time:  " + location.state.time}</h2>
                <h2>{"Mistype: " + location.state.mistypes}</h2>
                <h2>{"WPM: " + location.state.wpm}</h2>
            </div>
            <div className='link'>
            <Link to='/'>
                Back to Home
            </Link>
            </div>
            </div>
        </div>
      );
}