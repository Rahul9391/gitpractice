import React from 'react'
// import '../Main.css'

function Main() {
 const date= new Date();
 const hours=date.getHours();
 let timeOfDay
 if(hours<12){
   timeOfDay="Good Morning"
 }
 else if(hours>12 && hours<17){
    timeOfDay="Good Afternoon"
 }
 else{
   timeOfDay="Night night baby"
 }
  return (
    <main >
      <h1 id='demo'></h1>
        <h1>{timeOfDay}</h1>
    </main>
  )
}

export default Main