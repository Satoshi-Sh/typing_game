import { useEffect,useState  } from "react";
import "./timer.css"

export default function Timer(props){
    let [seconds, setSeconds]= useState(0)
    useEffect(()=>{
        const timer = setTimeout(() => setSeconds(seconds+1),1000);
        return () => clearTimeout(timer)
    },[seconds])
    
    return (
        <div className='timer'>
           <p>Time:  <span id='time'>{seconds}</span> </p> 
        </div>
    )
}