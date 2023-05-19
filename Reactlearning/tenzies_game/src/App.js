import logo from './logo.svg';
// import './App.css';
// import './Components/All.css'
import Dies from './Components/Dies'
import GridLearn from './Components/GridLearn';
import React from 'react'
import Confetti from 'react-confetti'
import Countup from './Components/Contup';

function App() {
  const [state, setState] = React.useState(() => allNewDice())
  const [tenzies,setTenzies]=React.useState(false)
  const[tries,setTries]=React.useState(0)
  const [seconds,setSeconds]=React.useState(0)
  const [minutes,setMinutes]=React.useState(0)
  const [best,setBest]=React.useState({
    bestmin:JSON.parse(localStorage.getItem("min")),
    bestsec:JSON.parse(localStorage.getItem("sec"))
  }|| false)
  const newArr = state.map((dice, index) => <Dies key={index} value={dice} value2={index} hold={hold} ></Dies>)
  var timer;





  function hold(id) {
    setState((prevState) => {
      let updateArr = []
      for (let i = 0; i < prevState.length; i++) {
        if (i === id) {
          updateArr.push({ ...prevState[i], isHeld: !prevState[i].isHeld })
        }
        else {
          updateArr.push(prevState[i])
        }
      }
      return updateArr
    })
  }

  function allNewDice() {
    let newDice = []
    for (var i = 0; i < 10; i++) {
      newDice.push({ data: Math.ceil(Math.random() * 6), isHeld: false })
    }
    return newDice
  }

  function rollDice() {
    setTries((prevState)=>prevState+1)
    if(tenzies){
      setTenzies(false)
      setState(allNewDice())
      setTries(0)
      setMinutes(0)
      setSeconds(0)
     
    }
    else{
      setState(prevState => {
        let updateArr2 = []
        for (let i = 0; i < prevState.length; i++) {
          if (prevState[i].isHeld) {
            updateArr2.push(prevState[i])
          }
          else {
            updateArr2.push({ data: Math.ceil(Math.random() * 6), isHeld: false })
          }
        }
        return updateArr2
      })
    }
    
  }

  // console.log(state)

  React.useEffect(()=>{
    let count=0
   for(let i=0;i<state.length;i++){
    if(state[i].data===state[0].data && state[i].isHeld)
    {
     count++
    }
   }
   if(count===10){
    setTenzies(true)
   
    console.log("You won the game!!!")
   }
  },[state])

  
   

  React.useEffect(() => {
    console.log('hi')
    if(!tenzies){
      timer = setInterval(() => {
        setSeconds(seconds + 1)
       
        if (seconds === 59) {
            setSeconds(0)
            setMinutes(minutes+1)
            
        }
        
      
    }, 1000)
    }
    else{
      // clearInterval(timer) //Not required as if condition is not true it will not enter and execute setInterval anyway
      var minCheck=JSON.parse(localStorage.getItem("min"))
      var secCheck=JSON.parse(localStorage.getItem("sec"))
     
      if(minutes<=minCheck && seconds<=secCheck){
       localStorage.setItem('min',JSON.stringify(minutes))
       localStorage.setItem('sec',JSON.stringify(seconds))
       setBest({ bestmin:minutes,bestsec:seconds})
      }
       else if(minCheck===null && secCheck===null ){
         localStorage.setItem('min',JSON.stringify(minutes))
         localStorage.setItem('sec',JSON.stringify(seconds))
         setBest({ bestmin:minutes,bestsec:seconds})
       }
    }
     
return ()=>clearInterval(timer)
 },[seconds])

  // React.useEffect(()=>{
  //   console.log('hi2')
  //   if(tenzies)
  //   {
  //     clearInterval(timer)
  //    var minCheck=JSON.parse(localStorage.getItem("min"))
  //    var secCheck=JSON.parse(localStorage.getItem("sec"))
    
  //    if(minutes<=minCheck && seconds<=secCheck){
  //     localStorage.setItem('min',JSON.stringify(minutes))
  //     localStorage.setItem('sec',JSON.stringify(seconds))
  //     setBest({ bestmin:minutes,bestsec:seconds})
  //    }
  //     else if(minCheck===null && secCheck===null ){
  //       localStorage.setItem('min',JSON.stringify(minutes))
  //       localStorage.setItem('sec',JSON.stringify(seconds))
  //       setBest({ bestmin:minutes,bestsec:seconds})
  //     }
     
  //   }
  // })





  return (
    // 
    <div>
      <main >
        <h1 className='heading'>Tenzies</h1>
        <p className='para'>Roll unit all dices are the same. Click each die to freeze it at its current value between rolls</p>
        {tenzies && <p className='para'>You completed in {tries} trails</p>}
        <div className='grid'>
          {newArr}

         
        </div>

        <button onClick={rollDice} className='btn'>{tenzies?"New Game":"Roll"}</button>
        {tenzies && <Confetti></Confetti>}
        <h1>Tries:{tries}</h1>
        <div className='grid2'>
        <p>timer:{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</p>
        {best&&<p className='bst'>Best time {best.bestmin}mins:{best.bestsec}secs</p>}
        </div>
      </main>
    
     {/* <Countup tenzies={tenzies}></Countup> */}
    </div>
  );
}

export default App;
