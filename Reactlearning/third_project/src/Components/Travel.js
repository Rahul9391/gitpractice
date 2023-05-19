import React from 'react'
import './TravelStyle.css'
import {FaSearchLocation} from 'react-icons/fa'
function Travel(props){
    return(
        <div className='Travelbody'>
            <div className='Travelimg'>            
                <img src={props.travelling.imageUrl} />
             </div>
            <div className='Travelsubbody'>
            <FaSearchLocation color='pink'></FaSearchLocation>
            <label>{props.travelling.location} </label>
            <a href={props.travelling.googlemaps} style={{color:"grey",fontSize:"13px",textDecorationLine:"underline"}}> view on google maps</a>
            <h2>{props.travelling.title}</h2>
            
            <span>{props.travelling.startDate} - {props.travelling.endDate}</span>
            <p className=''>{props.travelling.description}</p>
            </div>
        </div>
    )
}
export default Travel