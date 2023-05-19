import React from 'react'
export default function WindowTracker(){
    const[windowWidth,setWindowWidth]=React.useState(window.innerWidth)
    React.useEffect(()=>{
       
    },[])
    window.addEventListener("resize",()=>{
        setWindowWidth(window.innerWidth)
    })
    return(
        <div>
            <h1>{windowWidth}</h1>
        </div>
    )
}