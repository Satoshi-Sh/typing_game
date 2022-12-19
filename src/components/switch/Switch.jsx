import './switch.css'
import on from '../../images/on.png'
import off from '../../images/off.png'

import React, { useEffect, useState } from 'react';

export default function Switch(props){
    const [isAudio, setIsAudio] =useState(false)
    return {
        isAudio,
        render:(
        <div className='audioSwitch'>
        {
        isAudio 
        ? <img id='audioOn' src= {on} onClick={e=>setIsAudio(!isAudio)}/>
        : <img id='audioOff' src= {off} onClick={e=>setIsAudio(!isAudio)}/>
        }
        </div>

    )
    }
}