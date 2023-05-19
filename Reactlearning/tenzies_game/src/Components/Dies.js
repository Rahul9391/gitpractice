import React from "react";
import './All.css'
function Dies(props) {
    const styles={
        backgroundColor:props.value.isHeld ? "#59E391": "white"
    }
    return (
        
            <div className="Dies" style={styles} onClick={()=>props.hold(props.value2)}>
             {props.value.data}
               
            </div>
            
    
    )
}
export default Dies