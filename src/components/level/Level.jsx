import "./level.css"
import { Link, useNavigate } from "react-router-dom";

export default function Level(props){
    return (
        <div className='selectLevel'>
            <Link to ='/easy'>
               <button className='easy'>Easy</button>
            </Link>
            <button className="normal">Normal</button>
            <button className="hard">Hard</button>
        </div>
    )
}