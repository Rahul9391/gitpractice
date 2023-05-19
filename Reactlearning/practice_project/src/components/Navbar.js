import React from 'react'
import logo from  './Images/logo512.png'
import '../Main.css'
function Navbar() {
  return (
    <div>
        <nav className='nav'>
       <img src={logo} width='70px'></img>
       <h1 >ReactFacts</h1>
       <h4>React Course - Project 1</h4>
       </nav>
    </div>
  )
}

export default Navbar