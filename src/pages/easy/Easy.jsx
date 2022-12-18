import './easy.css'
import React, { useEffect, useState } from 'react';

export default function Easy(props){
    const text = `This is a test text to calculate your typing speed. Take it easy. Fluency comes with practice.`
    const [cursor,setCursor] = useState(0)
    function handleClick(e){
        e.preventDefault()
        console.log(e.key)
        if (e.key==text[cursor]){
            console.log('Correct')
            setCursor(cursor+1)
        }
    }
    return (
        <div className='easy_p' >
            <div className='board'>
               <textarea id='text' onKeyDown={handleClick}>{text}</textarea>

          </div>
        </div>
      );
}