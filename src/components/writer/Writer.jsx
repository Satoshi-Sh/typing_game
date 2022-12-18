import "./writer.css"
import Typewriter from 'typewriter-effect'
import React, { useEffect, useState } from 'react';
import Level from '../level/Level'


export default function Writer(props){
    const [showLevels,setShowLevels] = useState(false);

    useEffect(()=> {
        setTimeout(()=>{
            setShowLevels(true);
        },12000)
    },[])

    return (
    <div className='writer'>
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Welcome to our Typing gaen!!')
      .pauseFor(500)
      .deleteChars(6)
      .typeString('Game!! ')
      .pauseFor(500)
      .typeString("Please choose a level")
      .start();
  }}
  
/>
{showLevels && <Level />}
   </div>
      );
}