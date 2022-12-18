import "./level.css"
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Level(props){
    return (
        <div className='selectLevel'>
            <Link to ="/game" state = {{level:'Easy'}}>
            <button className='easy'>Easy</button>
            </Link>
            <Link to ="/game" state = {{level:'Normal'}}>
            <button className='normal'>Normal</button>
            </Link>
            <Link to ="/game" state = {{level:'Hard'}}>
            <button className='hard'>Hard</button>
            </Link>
        </div>
    )
}