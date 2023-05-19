import React, { useEffect, useState } from 'react'
export default function Countup() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [count,setCount]=useState(0)
    var timer;
   

    React.useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1)
           
            if (seconds === 59) {
                setSeconds(0)
                setMinutes(minutes+1)
                
            }
          
        }, 1000)
return ()=>clearInterval(timer)

    },)







    // else{
    //     clearInterval(start)
    // }

   function stop(){ 
    
        console.log(timer)
        clearInterval(timer)

       
    }
   React.useEffect(()=>{
    console.log(timer)
    clearInterval(timer)
   })


    return (
        <div>
            <p>timer:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</p>
            {/* <button onClick={up}>{upp === 0 ? "start" : "stop"}</button> */}
           
         <button onClick={stop}>stop</button>
        </div>


    )
}