import React from 'react'
import './All.css'
export default function Opening(props){
    return(
        <div className='OpeningDiv'>
            <h1> Quizzical</h1> 
          <button onClick={props.toggleHandler} className="startBtn">Start Quiz</button>
        </div>
    )
}