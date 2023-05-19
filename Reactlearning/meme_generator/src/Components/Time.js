import React from 'react'

export default function Time(props) {
let timeOfDay;
const date=new Date()
const hours=date.getHours()
if(hours>=4 && hours<12)
{
  timeOfDay="Good Morning"
}
else if(hours>=12 && hours<16)
{
  timeOfDay="Good Afternoon"
}
else if(hours>=16 && hours<20)
{
  timeOfDay="Good Evening"
}
else 
{
  timeOfDay="Good night"
}
console.log(hours)
  return (
    <div>{timeOfDay} {props.name}</div>
  )
}
