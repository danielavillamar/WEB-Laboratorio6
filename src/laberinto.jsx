//DRV 19086
// WEB 2021
import React, { useEffect } from 'react'
import Pared from './pared.jsx'

const w=20
const h=20
const b=20

const Laberinto = () =>{
    const [laberinto, setLaberinto] = React.useState([])
    useEffect(()=>{
        fetch(`http://ubege.xyz:3001/?w=${w}&h=${h}&type=json`).then(
            (response)=>{

                return response.json()
            }   
        ).then(
            (response)=>{
                setLaberinto(response)
            }
        )

    },[])




    const style = {
        width: `${((w+1)+(w*2))*b}px`,
        height: `${b*((h+1)+(h))}px`,
        background: 'PINK',
        display: 'grid',
        gridTemplate: `repeat(${(w+1)+(w*2)},${b}px)/repeat(${(h+1)+(h)},${b}px)`
    }
    return (

    <div style={style}>
        {laberinto.map((row,rowIndex)=>{
            return row.map((column,columnIndex)=>{
                if(column==='-' || column==='+'||column==='|'){
                    return <Pared key={`${columnIndex}-${rowIndex}`} x={columnIndex} y={rowIndex}/>
                }
                else{
                    return null
                }
                
            })
        })}
    </div>
    )
}
export {b}
export default Laberinto