import './easy.css'
import React, { useEffect, useState } from 'react';

export default function Easy(){
    const text = `This is a test text to calculate your typing speed. Take it easy. Fluency comes with practice.`
    const [cursor,setCursor] = useState(0)

    useEffect(() => {
        function handleKeyDown(e) {
            let letter = document.querySelector(`#letter${cursor}`)
            if (cursor==text.length){
                console.log('Done!!')
            }
            else if (e.key =="Shift") return;
            else if (e.key=="Backspace"){
                if (cursor > 0){
                setCursor(cursor-1)}
                letter = document.querySelector(`#letter${cursor-1}`)
                letter.style.color='rgba(128, 128, 128, 0.342)'   
            }
            else if (e.key==text[cursor]){
                console.log('Correct')
                letter.style.color='green'
                if (cursor < text.length){
                setCursor(cursor+1)}
            }
            else {   
                console.log('wrong')
                letter.style.color='red'
                if (cursor <text.length){
                setCursor(cursor+1)}
            }
        }
    
        document.addEventListener('keydown', handleKeyDown);
    
        // Don't forget to clean up
         return function cleanup() {
           document.removeEventListener('keydown', handleKeyDown);
         }
      }, [cursor]);
    
    return (
        <div className='easy_p' >
            <div className='board'>
               <p className='textarea'>
                {text.split('').map((letter,i)=>
                <span key={i} id={"letter" + i} >{letter}</span>)}                
               </p>
            </div>
        </div>
      );
}