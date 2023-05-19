import React from 'react'
import '../Main.css'
function Contact(props){
   let badgetext;
if(props.item.openspot===0)
{
    badgetext="SOLD OUT"
}
else if(props.item.location==="online"){
    badgetext="ONLINE"
}
console.log(props)
   
    return(
        <div className='contact-main'>
        <div className='contact'>
            {(props.item.openspot!==0 && props.item.location==="ofline")?<span></span>:<button>{badgetext}</button>}
            <img src={props.item.img} width="100%"></img>
            <h3>{props.item.name}</h3>
            <p>{props.item.phone}</p>
        </div>
        </div>
       
    )
}
export default Contact