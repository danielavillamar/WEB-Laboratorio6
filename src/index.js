//DRV 19086
// WEB 2021
import React from 'react'
import ReactDOM from 'react-dom'
import Laberinto from './laberinto.jsx'

const domReal = document.getElementById('laberinto')
const domVirtual = <Laberinto />

ReactDOM.render(domVirtual, domReal)