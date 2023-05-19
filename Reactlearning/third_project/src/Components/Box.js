import React from 'react'
import './TravelStyle.css'
function Box(props){
   
    
    const styles={
        backgroundColor:props.obj?"#222222":"transparent",
        borderRadius:"4px"
    }

    return(
        <div style={styles} className='BoxMain' onClick={()=>props.toogle(props.id)}></div>
    )
}
export default Box