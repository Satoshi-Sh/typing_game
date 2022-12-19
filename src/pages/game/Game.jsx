import './game.css'
import React, { useEffect, useState } from 'react';
import Timer from '../../components/timer/Timer'
import {useNavigate,useLocation} from 'react-router-dom';
import c from '../../audio/click.wav'
import s from '../../audio/stomp.wav'

const data = {
    'Easy':`This is a test text to calculate your typing speed. Take it easy. Fluency comes with practice.`,
    'Normal': 'Mastodon is free and open-source software for running self-hosted social networking services. It has microblogging features similar to Twitter, which are offered by a large number of independently run nodes, known as instances, each with its own code of conduct, terms of service, privacy policy, privacy options, and moderation policies.',
    'Hard': `The Odin Project is an open-source community dedicated to providing the best information sources to take you from zero to a full-stack developer. More information can be found at The Odin Project's about page. In this unit, we'll learn about how the web works and start thinking about the basics of computer and web programming. Each of the following sections and lessons represents essential baseline knowledge. Even if you have no intention of becoming a web developer yourself, this material should help you gain a useful understanding of the moving parts involved in creating and serving content on the web.`
}


let click = new Audio(c)
let stomp = new Audio(s)

export default function Game(){

    const navigate = useNavigate()
    const location= useLocation()
    const text = data[location.state.level]
    const audio = location.state.audio
    const word_counts = text.split(' ').length
    const [cursor,setCursor] = useState(0)
    const [mistypes,setMistypes] = useState(0)
    
    function isRed(){
        let isR = false;
        const spans = document.querySelectorAll('span')
        for (let span of spans){
        if (span.style.color=='red'){
            isR =true
        } 
        }
        return isR
    }

    useEffect(() => {
        function handleKeyDown(e) {
            let letter = document.querySelector(`#letter${cursor}`)

            if (e.key =="Shift") return;
            else if (e.key=="Backspace"){
                if (cursor > 0){
                setCursor(cursor-1)}
                letter = document.querySelector(`#letter${cursor-1}`)
                letter.style.color='rgba(128, 128, 128, 0.342)'   
            }
            else if (e.key=='Space'){
                letter.style.color='green'
                if (cursor < text.length){
                setCursor(cursor+1)
                if (cursor==text.length-1 && !isRed()){

                    const time = document.querySelector('#time').innerText
                    const wpm =  Math.round((word_counts/parseInt(time)) * 60)
                    navigate('/score', {state:{mode:location.state.level,time:time,mistypes,wpm}})
                    
                }
            }

            }
            else if (e.key==text[cursor]){
                if (audio){
                click.currentTime =0
                click.play()
                }
                letter.style.color='green'
                if (cursor < text.length){
                setCursor(cursor+1)
                if (cursor==text.length-1 && !isRed()){

                    const time = document.querySelector('#time').innerText
                    const wpm =  Math.round((word_counts/parseInt(time)) * 60)
                    navigate('/score', {state:{mode:location.state.level,time:time,mistypes,wpm}})
                    
                }
            }
                
            }
            else {   
                if (audio){
                stomp.currentTime =0
                stomp.play()
                }
                letter.style.color='red'
                letter.style.textDecoration='underline'
                
                setMistypes(mistypes+1)
                if (cursor <text.length-1){
                
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
            <Timer />
               <p className='textarea'>
                {text.split('').map((letter,i)=>
                <span key={i} id={"letter" + i} >{letter}</span>)}                
               </p>
            </div>
        </div>
      );
}