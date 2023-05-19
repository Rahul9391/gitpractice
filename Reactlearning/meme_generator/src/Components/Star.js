import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Star(props){
    let icon=props.isFilled?<FaStar color='gold'></FaStar>:<FaStar color='black'></FaStar>
    return(
        <div onClick={props.changeImg}>
            {icon}
        </div>
    )
}