import "./level.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Switch from '../switch/Switch'

export default function Level(props){
    const {render, isAudio} = Switch()
    return (
        <div className='buttons'>
         {render}
        <div className='selectLevel'>
            <Link to ="/game" state = {{level:'Easy',audio:isAudio}} >
            <button className='easy'>Easy</button>
            </Link>
            <Link to ="/game" state = {{level:'Normal',audio:isAudio}} >
            <button className='normal'>Normal</button>
            </Link>
            <Link to ="/game" state = {{level:'Hard',audio:isAudio}} >
            <button className='hard'>Hard</button>
            </Link>
        </div>
        </div>
    )
}