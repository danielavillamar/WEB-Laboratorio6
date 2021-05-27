//DRV 19086
// WEB 2021
import React from 'react'
import {b} from './laberinto.jsx'
const Pared = ({x,y}) =>{

    const style = {
        width: `${b}px`,
        height: `${b}px`,
        background: 'PURPLE',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={style}></div>
    )
}

export default Pared