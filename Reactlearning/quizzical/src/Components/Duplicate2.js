import React from 'react'
import QandA from './QandA'
function Quiz(props){
    const [quizData,setQuizData]=React.useState([])
    var btn=0
    const updateData=quizData.map((singleData,index)=><QandA key={index} questions={singleData.question} 
    answers={singleData} btn={btn}></QandA>)
   
    function dataValidation(){
        console.log("quizdata")
        console.log(quizData)
      }

    React.useEffect(()=>{
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
        .then(res=>res.json())
        .then(result=>setQuizData(result.results))
    },[props.toggle])
    return(
        <div>
          {updateData}
          <button onClick={dataValidation}>submit</button>
    
        </div>
    )
}
export default Quiz