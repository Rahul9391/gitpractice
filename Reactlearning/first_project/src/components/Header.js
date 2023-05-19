import React from 'react'
// import logo from './logo192.png'
import './All.css'

function Header(props){
    return(
       
        <div className="Header">
            <img src='./logo512.png' ></img>
            <h2>React Facts</h2>
            <label>Light</label>
            <button onClick={props.event}>toggle</button>
            <label>Dark</label>
        </div>
       
       
    )
}
export default Header

