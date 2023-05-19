import React, { useEffect } from 'react'
import './All.css'
function QandA(props) {
  const [toggleClr, setToggleClr] = React.useState([])
  let [count,setCount]=React.useState(0)
  var incorrect = props.answers.incorrect_answers
  var correct = props.answers.correct_answer
  const qa = [...incorrect, correct]
  let newPos,
    temp;
  let shuffleArr
  

  console.log(toggleClr)

  function handleToggleClr(id) {
    const newChoices=[]
    console.log('inside function')
    console.log(id)
    for(var i=0;i<toggleClr.length;i++){
      if(id===i){
        newChoices.push({...toggleClr[i],toggler:!toggleClr[i].toggler})
      }
      else{
        newChoices.push({...toggleClr[i],toggler:false})
      }
  }
  setToggleClr(newChoices)
}

shuffleArr = toggleClr.map((choice, index) => <button
    className='choices'
    onClick={() => handleToggleClr(index)}
    style={{backgroundColor: choice.toggler? "lightblue" : "white"}}
    key={index}>{choice.choices}</button>)

  React.useEffect(()=>{
   localStorage.removeItem("counter")
    const qa2=qa.map(choice=>{
      return {choices:choice,toggler:false}
    })
    for (var i = qa2.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1))
      temp = qa2[i];
      qa2[i] = qa2[newPos];
      qa2[newPos] = temp
    }
    setToggleClr(qa2)
    console.log("useeffect")
    
  },[])
  

  return (
    <div className='mainWrapper'>
      <p>{props.questions}</p>
      <div className='wrapper'>
        {shuffleArr}
      </div>
      {}
    </div>
  )
}
export default QandA