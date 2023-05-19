import React from 'react'
function Jokes(props){
    const [isShown,setIsShown]=React.useState(false)
    const [messages,Setmessages]=React.useState(["a"])
    function eventHandler(){
        setIsShown((prevState)=>!prevState)
        console.log(isShown)
    }
    // return(
    //     <div>
    //         <h2>{props.setup}</h2>
    //       {isShown?<p>{props.punchline}</p>:""}  
    //         <button onClick={eventHandler}>{isShown?"hide punchline":"show punchline"}</button>
    //         {messages.length!==0 && <p>you have {messages.length} unread messages</p>}
    //     </div>
    // )
    return(
        <div>
            {messages.length>0 && <h1>you have {messages.length} unread {messages.length===1?"message":"messages"}</h1>}
        </div>
    )
}
export default Jokes