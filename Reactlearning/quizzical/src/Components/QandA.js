import React, { useEffect } from 'react'
import './All.css'
function QandA(props) {
  const[newData,setNewData]=React.useState([])
  console.log("count value")
  console.log(props.counting)

  React.useEffect(()=>{
  if(props.counting===undefined){
    setNewData(props.answers.map((single,index)=>{
      return  <button key={index} onClick={()=>props.clrValid(props.btn,index)} className="btn"
      style={{backgroundColor: single.toggler? "lightblue" : "white"}}
      >{single.choices}  </button>
    }
   )
    )
  }
  else{
    console.log("props.answers")
    console.log(props.answers)
    setNewData(props.answers.map(single=>{
          if(single.toggler===true)
          {
            if(single.choices===props.quizData.correct_answer){
              return <button style={{backgroundColor:"lightgreen"}}  className="btn">{single.choices}</button>
            }
            else{
              return <button style={{backgroundColor:"lightcoral"}} className="btn">{single.choices}</button>
            }
          }
          else if(single.toggler===false){
            if(single.choices===props.quizData.correct_answer){
              return <button style={{backgroundColor:"lightgreen"}} className="btn">{single.choices}</button>
            }
            else{
              return <button style={{backgroundColor:"white"}} className="btn">{single.choices}</button>
            }
          }
    }))
  }
},[props.toggleClr,props.counting])
  
  return (
    <div className='mainWrapper'>
      <p className='questions'>{props.questions}</p>
      <div className='wrapper'>
       {newData}
      </div>
      
    </div>
  )
}
export default QandA