import React from 'react'
import QandA from './QandA'
function Quiz(props) {
  const [quizData, setQuizData] = React.useState([])
  const [toggleClr, setToggleClr] = React.useState([])
  const [count,setCount]=React.useState(undefined)
  const [reset,setReset]=React.useState(0)
  const[reRender,setReRender]=React.useState(0)
  let newPos,
    temp;

  var updateData
  console.log("fs")
  console.log(quizData)
  console.log(toggleClr[0])
  if(toggleClr[0]!==undefined){
     updateData = quizData.map((singleData, index) => <QandA key={index} questions={singleData.question}
    btn={index}   answers={toggleClr[index]} clrValid={clrValidation} counting={count}
    toggleClr={toggleClr} quizData={quizData[index]}
    ></QandA>)
  }
 
   function resetData(){
    setReRender(reRender+1)
    setQuizData([])
    setToggleClr([])
    setCount(undefined)
    setReset(0)
   }

  function dataValidation() {
   
    setReset(1)
    var counter=0;
    console.log("quizdata")
    console.log(quizData)
    console.log("toggledata")
    console.log(toggleClr)
    for(var i=0;i<5;i++){
      for(var j=0;j<4;j++){
        if(toggleClr[i][j].toggler===true){
          if(quizData[i].correct_answer===toggleClr[i][j].choices){
            console.log('one correct answer')
            counter=counter+1
            
          }
        }
      }
    }
setCount(counter)
  }
  function clrValidation(btn,index){
    var newArr=[]
    var newArr2=[]
    console.log(btn+""+index)
  newArr=toggleClr.map((singleArr,ind)=>{
    if(ind===btn){
      console.log("inside nigga")
      for(var i=0;i<singleArr.length;i++){
       if(i===index){
          console.log({...singleArr[i],toggler:!singleArr[i].toggler})
          newArr2.push({...singleArr[i],toggler:!singleArr[i].toggler})
       }
       else{
        newArr2.push({...singleArr[i],toggler:false})
       }
      }
      console.log("newArr2!!")
      console.log(newArr2)
      return newArr2
    }
     else{
      return singleArr
     }
    
  })
  console.log("newarr")
   console.log(newArr)
    setToggleClr(newArr)
  }

  React.useEffect(() => {
    console.log('hi again')
    fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(result =>  setQuizData(result.results)
      )
    },[reRender])
    React.useEffect(() => {
      console.log('hi again!!')
    var newData = quizData.map((singleData) => {
      var data = [...singleData.incorrect_answers, singleData.correct_answer]

      for (var i = data.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1))
        temp = data[i];
        data[i] = data[newPos];
        data[newPos] = temp
      }
      return data
    })
    console.log("newdata")
    console.log(newData)

    var newData2 = newData.map((singleData) => {
      return singleData.map((oneArr) => {
        return { choices: oneArr, toggler: false }
      })
    })
    console.log("newdata2")
    console.log(newData2)
    setToggleClr(newData2)
  },[quizData])

  return (
    <div>
      {toggleClr[0]!==undefined && updateData}
     {
     reset===0?<button onClick={dataValidation} className="finalbtn">submit</button>
     :<button onClick={resetData} className="finalbtn">New Game</button>} 
      {count!==undefined && <p className='scoreTxt'>You have scored {count}/5</p>}
    </div>
  )
}
export default Quiz