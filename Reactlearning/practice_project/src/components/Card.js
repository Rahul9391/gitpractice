import React from 'react'
import '../Main.css'
// import logo from './Images/men.png'
import {FaStar} from 'react-icons/fa'

    function Card(props){
        return(
        
            <div className='card' >
                
                    <img src={props.image1} width="100%" className='card-img'></img>
                    
               
                <div className='card-cont'>
                    <label><FaStar color='pink'></FaStar>{props.rating}({props.reviewcount})</label>
                    <p>{props.title}</p>
                    <b>From <i>{props.country}</i> {props.price}/month</b>
                    </div>
                
            </div>
          
            
        )
    }
    
export default Card;